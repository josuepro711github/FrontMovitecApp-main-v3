import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosInfoComponent } from './admin-usuarios-info.component';

describe('AdminUsuariosInfoComponent', () => {
  let component: AdminUsuariosInfoComponent;
  let fixture: ComponentFixture<AdminUsuariosInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
