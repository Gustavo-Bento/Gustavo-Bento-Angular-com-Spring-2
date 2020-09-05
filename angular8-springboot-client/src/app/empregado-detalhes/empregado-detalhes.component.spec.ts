import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregadoDetalhesComponent } from './empregado-detalhes.component';

describe('EmpregadoDetalhesComponent', () => {
  let component: EmpregadoDetalhesComponent;
  let fixture: ComponentFixture<EmpregadoDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpregadoDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregadoDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
