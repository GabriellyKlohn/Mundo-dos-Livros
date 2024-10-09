import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovprodutoService {

  constructor(private http:HttpClient) {}
  public salvar (dados:any):Observable<any>{
    return this.http.post(
      'http://local host:3000/movimentação/add',
      {dados},{observe:'response'}
    )
  }
}
