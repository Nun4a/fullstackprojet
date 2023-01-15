import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutDoctorComponent } from './ajout-doctor.component';

describe('AjoutDoctorComponent', () => {
  let component: AjoutDoctorComponent;
  let fixture: ComponentFixture<AjoutDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutDoctorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
