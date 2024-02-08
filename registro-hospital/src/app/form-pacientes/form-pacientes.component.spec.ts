import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPacientesComponent } from './form-pacientes.component';

describe('FormPacientesComponent', () => {
  let component: FormPacientesComponent;
  let fixture: ComponentFixture<FormPacientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormPacientesComponent]
    });
    fixture = TestBed.createComponent(FormPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
