import { ProfissionaisService } from './../profissionais.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissionais-pesquisar',
  templateUrl: './profissionais-pesquisar.component.html',
  styleUrls: ['./profissionais-pesquisar.component.css']
})
export class ProfissionaisPesquisarComponent implements OnInit  {

    profissionais = [ ];

    constructor(private profissionaisService: ProfissionaisService) { }

    ngOnInit() {
        this.pesquisar();
    }

    pesquisar() {
        this.profissionaisService.pesquisar()
        .subscribe(() => null);
    }
}
