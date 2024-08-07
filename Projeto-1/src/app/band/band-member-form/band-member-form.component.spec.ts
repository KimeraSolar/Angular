import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandMemberFormComponent } from './band-member-form.component';

describe('BandMemberFormComponent', () => {
  let component: BandMemberFormComponent;
  let fixture: ComponentFixture<BandMemberFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BandMemberFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BandMemberFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
