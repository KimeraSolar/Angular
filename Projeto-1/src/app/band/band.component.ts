import { Component } from '@angular/core';
import { BandService } from './band.service';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrl: './band.component.scss'
})
export class BandComponent {
  members: Array<Member>;
  
  constructor(private bandService : BandService){
    this.members = this.bandService.getBandMembers();
  }

  // Fazer como arrow function realiza o binding do this a esse escopo (comportamento mais comum entre as linguagens) 
  // ao invés do escopo onde a função é chamada como é na função padrão do JS
  setNewMember = (member:Member) => {
    this.bandService.setNewBandMember(member);

    this.members = this.bandService.getBandMembers();
  }
}
