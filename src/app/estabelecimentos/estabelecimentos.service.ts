import { Estabelecimento } from './model/Estabelecimento';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentosService {

    constructor(private httpClient: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    pesquisar() {
        const url = 'http://localhost:8080/estabelecimentos/listar';
        return this.httpClient.get<Estabelecimento[]>(url);
    }

    pesquisarPorNome(nome) {
        const url = 'http://localhost:8080/estabelecimentos/listar?nome=' + nome;
        return this.httpClient.get<Estabelecimento[]>(url);
    }

    atualizar(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
        const url = 'http://localhost:8080/estabelecimentos';
        return this.httpClient.put<Estabelecimento>(`${url}/${estabelecimento.id}`, estabelecimento)
            .pipe(
                map(data => data)
            );
    }

    buscarPorCodigo(codigo: number): Observable<Estabelecimento> {
        const url = 'http://localhost:8080/estabelecimentos';
        return this.httpClient.get<Estabelecimento>(`${url}/${codigo}`)
            .pipe(
                map(data => data),
                catchError(this.handleError)
            );
    }

    salvar(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
        const body = JSON.stringify(estabelecimento);
        return this.httpClient.post<Estabelecimento>('http://localhost:8080/estabelecimentos/novo', body, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    delete(codigo: number): Observable<{}> {
        const url = 'http://localhost:8080/estabelecimentos';
        return this.httpClient.delete(`${url}/${codigo}`)
            .pipe(
                map(estabelecimentoSalvo => estabelecimentoSalvo),
                catchError(this.handleError)
            );
    }

    // pegue da documentacao
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
        } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
        'Something bad happened; please try again later.');
    }
}
