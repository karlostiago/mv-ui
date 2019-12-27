import { Estabelecimento } from './../model/Estabelecimento';
import { EstabelecimentosService } from './../estabelecimentos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estabelecimentos-pesquisar',
  templateUrl: './estabelecimentos-pesquisar.component.html',
  styleUrls: ['./estabelecimentos-pesquisar.component.css']
})
export class EstabelecimentosPesquisarComponent implements OnInit {

    estabelecimentos: Estabelecimento[ ];
    constructor(private estabelecimentosService: EstabelecimentosService) { }

    ngOnInit() {
        this.estabelecimentosService.pesquisar()
        .subscribe( estabelecimento => this.estabelecimentos = estabelecimento );
    }

}
