import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/empregados';

  constructor(private http: HttpClient) { }

  getEmpregado(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  criarEmpregado(empregado: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, empregado);
  }

  updateEmpregado(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmpregado(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmpregadosLista(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
