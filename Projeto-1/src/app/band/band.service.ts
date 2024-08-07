import { Injectable } from '@angular/core';

@Injectable()
export class BandService {

  band : { members: Array<Member>} = {
    members: [
      {
        firstName: 'John',
        lastName: 'Lennon',
        instrument: 'Violão'
      },
      {
        firstName: 'George',
        lastName: 'Harrison',
        instrument: 'Guitarra'
      }
    ]
  }

  constructor() { }

  getBandMembers(){
    return this.band.members;
  }

  setNewBandMember(member: Member){
    this.band.members.push(member);
  }
}
