import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutAdminComponent } from './ajout-admin.component';

describe('AjoutAdminComponent', () => {
  let component: AjoutAdminComponent;
  let fixture: ComponentFixture<AjoutAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
