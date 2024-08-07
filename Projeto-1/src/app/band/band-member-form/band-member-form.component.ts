import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import instrumentsOptions from '../../../mocks/instruments.json';

@Component({
  selector: 'app-band-member-form',
  templateUrl: './band-member-form.component.html',
  styleUrl: './band-member-form.component.scss'
})
export class BandMemberFormComponent {
  firstName = new FormControl();
  lastName = new FormControl();
  instrument = new FormControl();
  instrumentsOptions = instrumentsOptions;
  @Input() setNewMember!: Function;

  submitNewMemberForm(){
    const newMember = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      instrument: this.instrument.value
    } satisfies Member;
    this.setNewMember(newMember);
    this.firstName.setValue('');
    this.lastName.setValue('');
    this.instrument.setValue('');
  }
}
