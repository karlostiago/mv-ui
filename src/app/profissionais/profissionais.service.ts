import { Profissional } from './model/profissional';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

    //private readonly resource = 'http://localhost:8080/profissionais/listar';
    private readonly resourceID

    constructor(private httpClient: HttpClient) { }

    pesquisar() {
        const resource = 'http://localhost:8080/profissionais/listar';
        return this.httpClient.get<Profissional[]>(resource);
    }

    buscarPorId(id: number) {
        const resource = 'http://localhost:8080/profissionais/' + id;
        return this.httpClient.get<Profissional>(resource);
    }
}
