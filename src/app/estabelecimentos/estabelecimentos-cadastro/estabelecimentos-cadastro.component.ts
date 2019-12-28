import { EstabelecimentosService } from './../estabelecimentos.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-estabelecimentos-cadastro',
  templateUrl: './estabelecimentos-cadastro.component.html',
  styleUrls: ['./estabelecimentos-cadastro.component.css']
})
export class EstabelecimentosCadastroComponent implements OnInit {

    estabelecimento: any;
    constructor(
        private estabelecimentosService: EstabelecimentosService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        this.estabelecimento = {};
    }

    salvar() {
        this.estabelecimentosService.salvar(this.estabelecimento)
        .subscribe(() => {
            this.estabelecimento = {};
            this.toastyService.success('Estabelecimento salvo com sucesso.');
        });

    }
}
