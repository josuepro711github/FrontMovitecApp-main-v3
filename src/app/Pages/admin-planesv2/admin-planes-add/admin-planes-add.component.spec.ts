import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlanesAddComponent } from './admin-planes-add.component';

describe('AdminPlanesAddComponent', () => {
  let component: AdminPlanesAddComponent;
  let fixture: ComponentFixture<AdminPlanesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlanesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlanesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
