import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private url:string ='http://localhost:8080';

  constructor( private http:HttpClient) { }

  //metodo para selecionar todos os clientes
  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  //medoto prara casdastrar 
  cadastrar(obj:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url+'/cadastrar', obj);
  }

  //medoto para editar 
  editar(obj:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url+'/update', obj);
  }

  //metodo para excluir
  excluir(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url+ '/' + codigo); 
  }
}
