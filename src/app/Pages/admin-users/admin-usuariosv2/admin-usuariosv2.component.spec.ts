import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsuariosv2Component } from './admin-usuariosv2.component';

describe('AdminUsuariosv2Component', () => {
  let component: AdminUsuariosv2Component;
  let fixture: ComponentFixture<AdminUsuariosv2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminUsuariosv2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsuariosv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
