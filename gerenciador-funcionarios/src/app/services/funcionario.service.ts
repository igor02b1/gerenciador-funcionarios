import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../Models/Funcionarios';
import { Response } from '../Models/Response';

@Injectable({
  providedIn: 'root'
})

export class FuncionarioService {

  private apiUrl = `${environment.apiUrl}/Funcionario/`

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>>{
    return this.http.get<Response<Funcionario[]>>(this.apiUrl)
  }

  CreateFuncionario(funcionario : Funcionario) : Observable<Response<Funcionario[]>>{
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario)
  }

}
