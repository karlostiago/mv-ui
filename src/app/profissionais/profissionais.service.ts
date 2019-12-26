import { Profissional } from './model/profissional';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

    private readonly resource = 'http://localhost:8080/profissionais/listar';

    constructor(private httpClient: HttpClient) { }

    pesquisar() {
      return this.httpClient.get<Profissional[]>(this.resource);
    }
}
