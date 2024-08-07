import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-band-member]', // used as <div app-band-member [member]="member">
  templateUrl: './band-member.component.html',
  styleUrl: './band-member.component.scss'
})
export class BandMemberComponent {

  @Input() member!: Member;
}
