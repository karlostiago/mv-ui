import { Profissional } from './model/profissional';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProfissionaisService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    constructor(private httpClient: HttpClient) { }

    pesquisar() {
        const url = 'http://localhost:8080/profissionais/listar';
        return this.httpClient.get<Profissional[]>(url);
    }

    buscarPorId(id: number) {
        const url = 'http://localhost:8080/profissionais/' + id;
        return this.httpClient.get<Profissional>(url);
    }

    pesquisarPorNome(nome) {
        const url = 'http://localhost:8080/profissionais/listar?nome=' + nome;
        return this.httpClient.get<Profissional[]>(url);
    }

    atualizar(profissional: Profissional): Observable<Profissional> {
        const url = 'http://localhost:8080/profissionais';
        return this.httpClient.put<Profissional>(`${url}/${profissional.id}`, profissional)
            .pipe(
                map(data => data)
            );
    }

    buscarPorCodigo(codigo: number): Observable<Profissional> {
        const url = 'http://localhost:8080/profissionais';
        return this.httpClient.get<Profissional>(`${url}/${codigo}`)
            .pipe(
                map(data => data),
                catchError(this.handleError)
            );
    }

    salvar(profissional: Profissional): Observable<Profissional> {
        const body = JSON.stringify(profissional);
        return this.httpClient.post<Profissional>('http://localhost:8080/profissionais/novo', body, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            );
    }

    delete(codigo: number): Observable<{}> {
        const url = 'http://localhost:8080/profissionais';
        return this.httpClient.delete(`${url}/${codigo}`)
            .pipe(
                map(profissionalSalvo => profissionalSalvo),
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
