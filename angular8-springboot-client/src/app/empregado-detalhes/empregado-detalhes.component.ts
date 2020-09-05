import { Empregado } from '../empregado';
import { Component, OnInit, Input } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { EmpregadoListaComponent } from '../empregado-lista/empregado-lista.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empregado-details',
  templateUrl: './empregado-details.component.html',
  styleUrls: ['./empregado-details.component.css']
})
export class EmpregadoDetalhesComponent implements OnInit {

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

  list(){
    this.router.navigate(['empregados']);
  }
}
