import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import instrumentsOptions from '../../../mocks/instruments.json';

@Component({
  selector: 'app-band-member-form',
  templateUrl: './band-member-form.component.html',
  styleUrl: './band-member-form.component.scss'
})
export class BandMemberFormComponent {
  newMember= {
    firstName: '',
    lastName: '',
    instrument: ''
  } satisfies Member
  instrumentsOptions = instrumentsOptions;
  @Input() setNewMember!: Function;

  submitNewMemberForm(){
    this.setNewMember(this.newMember);
    this.newMember =  {
      firstName: '',
      lastName: '',
      instrument: ''
    }
  }
}
