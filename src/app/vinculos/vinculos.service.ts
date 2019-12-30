import { Profissional } from './../model/profissional';
import { catchError, map, retry } from 'rxjs/operators';
import { Vinculo } from './../model/vinculo';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VinculosService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    constructor(private httpClient: HttpClient) { }

    pesquisar() {
        const url = 'http://localhost:8080/vinculos/listar';
        return this.httpClient.get<Vinculo[]>(url);
    }

    delete(codigo: number): Observable<{}> {
        const url = 'http://localhost:8080/vinculos';
        return this.httpClient.delete(`${url}/${codigo}`)
            .pipe(
                map(vinculoSalvo => vinculoSalvo),
                catchError(this.handleError)
            );
    }

    salvar(profissional: Profissional): Observable<Profissional> {
        const body = JSON.stringify(profissional);
        return this.httpClient.post<Profissional>('http://localhost:8080/vinculos/novo', body, this.httpOptions)
            .pipe(
                retry(2),
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
