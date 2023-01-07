import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCenterComponent } from './form-center.component';

describe('FormCenterComponent', () => {
  let component: FormCenterComponent;
  let fixture: ComponentFixture<FormCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
