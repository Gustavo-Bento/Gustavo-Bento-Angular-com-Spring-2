import { EmpregadoService } from '../empregado.service';
import { Empregado } from '../empregado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-empregado',
  templateUrl: './criar-empregado.component.html',
  styleUrls: ['./criar-empregado.component.css']
})
export class criarEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  submetido = false;

  constructor(private empregadoService: EmpregadoService,
    private router: Router) { }

  ngOnInit() {
  }

  novoEmpregado(): void {
    this.submetido = false;
    this.empregado = new Empregado();
  }

  save() {
    this.empregadoService
    .criarEmpregado(this.empregado).subscribe(data => {
      console.log(data)
      this.empregado = new Empregado();
      this.gotoList();
    },
    error => console.log(error));
  }

  onSubmit() {
    this.submetido = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/empregados']);
  }
}
