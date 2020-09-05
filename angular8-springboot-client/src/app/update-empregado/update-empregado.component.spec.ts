import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpregadoComponent } from './update-empregado.component';

describe('UpdateEmpregadoComponent', () => {
  let component: UpdateEmpregadoComponent;
  let fixture: ComponentFixture<UpdateEmpregadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpregadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpregadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
