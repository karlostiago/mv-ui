import { Estabelecimento } from './model/Estabelecimento';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

    private readonly resource = 'http://localhost:8080/estabelecimentos/listar';

    constructor(private httpClient: HttpClient) { }

    pesquisar() {
        return this.httpClient.get<Estabelecimento[]>(this.resource);
    }
}
