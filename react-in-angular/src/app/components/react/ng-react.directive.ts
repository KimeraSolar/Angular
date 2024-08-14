import { Directive, ElementRef, Input } from "@angular/core";
import { ComponentProps, ElementType } from "react";
import { createRoot, Root } from "react-dom/client";

@Directive({
    standalone: true,
    selector: '[ngReactComponent]'
})
export class NgReactDirective<Comp extends ElementType>{

    @Input() props!: ComponentProps<ElementType>;

    @Input() ngReactComponent!: () => Promise<Comp>;

    private root: Root;

    constructor(private elm: ElementRef){
        this.root = createRoot(this.elm.nativeElement);
    }

    async ngOnChanges(){
        const [{createElement}, Comp] = await Promise.all([
            import('react'),
            this.ngReactComponent()
        ]);

        this.root.render(createElement(Comp, this.props));
    }

    ngOnDestroy(): void {
        this.root.unmount();
    }
}