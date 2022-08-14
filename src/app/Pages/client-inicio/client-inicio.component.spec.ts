import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientInicioComponent } from './client-inicio.component';

describe('ClientInicioComponent', () => {
  let component: ClientInicioComponent;
  let fixture: ComponentFixture<ClientInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientInicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
