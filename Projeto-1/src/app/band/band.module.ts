import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BandComponent } from './band.component';
import { BandMemberComponent } from './band-member/band-member.component';
import { BandMemberFormComponent } from './band-member-form/band-member-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BandService } from './band.service';

@NgModule({
  declarations: [
    BandComponent,
    BandMemberComponent,
    BandMemberFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BandComponent
  ],
  providers: [
    BandService
  ]
})
export class BandModule { }
