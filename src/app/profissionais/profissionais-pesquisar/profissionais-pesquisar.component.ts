import { Profissional } from './../model/profissional';
import { ProfissionaisService } from './../profissionais.service';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-profissionais-pesquisar',
  templateUrl: './profissionais-pesquisar.component.html',
  styleUrls: ['./profissionais-pesquisar.component.css']
})
export class ProfissionaisPesquisarComponent implements OnInit  {

    profissionais: Profissional[ ];

    constructor(private profissionaisService: ProfissionaisService) { }

    ngOnInit() {
        this.profissionaisService.pesquisar()
            .subscribe( profissional => this.profissionais = profissional );
    }
}
