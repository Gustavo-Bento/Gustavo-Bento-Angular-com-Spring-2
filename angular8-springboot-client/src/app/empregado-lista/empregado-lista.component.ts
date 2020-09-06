import {EmpregadoDetalhesComponent} from '../empregado-detalhes/empregado-detalhes.component';
import {Observable} from "rxjs";
import {EmpregadoService} from "../empregado.service";
import {Empregado} from "../empregado";
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: "app-empregado-lista",
  templateUrl: "./empregado-lista.component.html",
  styleUrls: ["./empregado-lista.component.css"]
})
export class EmpregadoListaComponent implements OnInit{
  empregados: Observable<Empregado[]>;

  constructor(private empregadoService: EmpregadoService,
    private router: Router){}

    ngOnInit(){
      this.reloadData();
    }
    reloadData(){
      this.empregados = this.empregadoService.getEmpregadosLista();
    }

    deleteEmpregado(id: number){
      this.empregadoService.deleteEmpregado(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error)
      );
    }
    EmpregadoDetalhesComponent(id: number){
      this.router.navigate(['detalhes', id]);
    }
}

