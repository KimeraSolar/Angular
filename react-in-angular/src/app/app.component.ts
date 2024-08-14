import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgReactDirective } from './components/react/ng-react.directive';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgReactDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  public counter = 21;

  public handleClick = () => { // arrow function does the .bind(this) by itself
    this.counter++;
  }

  ReactButton = () => import('./components/CountButton').then((m) => m.default);

  title = 'react-in-angular';

}
