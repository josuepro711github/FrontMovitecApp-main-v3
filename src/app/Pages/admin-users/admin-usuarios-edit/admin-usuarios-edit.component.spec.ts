import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosEditComponent } from './admin-usuarios-edit.component';

describe('AdminUsuariosEditComponent', () => {
  let component: AdminUsuariosEditComponent;
  let fixture: ComponentFixture<AdminUsuariosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
