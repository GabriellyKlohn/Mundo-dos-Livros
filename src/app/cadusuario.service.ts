import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadusuarioService {

  constructor(private http:HttpClient) {}
  public salvar (dados:any):Observable<any>{
    return this.http.post(
      'http://localhost:3000/usuario/add',
      {dados},{observe:'response'}
    )
  }
}
