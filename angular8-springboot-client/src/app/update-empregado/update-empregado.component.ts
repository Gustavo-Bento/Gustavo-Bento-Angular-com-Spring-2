import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-update-empregado',
  templateUrl: './update-empregado.component.html',
  styleUrls: ['./update-empregado.component.css']
})
export class UpdateEmpregadoComponent implements OnInit {

  id: number;
  empregado: Empregado;

  constructor(private route: ActivatedRoute,private router: Router,
    private empregadoService: EmpregadoService) { }

  ngOnInit() {
    this.empregado = new Empregado();

    this.id = this.route.snapshot.params['id'];

    this.empregadoService.getEmpregado(this.id)
      .subscribe(data => {
        console.log(data)
        this.empregado = data;
      }, error => console.log(error));
  }

  updateEmpregado() {
    this.empregadoService.updateEmpregado(this.id, this.empregado)
      .subscribe(data => {
        console.log(data);
        this.empregado = new Empregado();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateEmpregado();
  }

  gotoList() {
    this.router.navigate(['/empregados']);
  }
}
