import { ActivatedRoute } from '@angular/router';
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
        private toastyService: ToastyService,
        private router: ActivatedRoute
    ) { }

    ngOnInit() {
        const codigo = this.router.snapshot.params['id'];

        if (codigo) {
            this.carregarEstabelecimento(codigo);
        }

        this.estabelecimento = {};
    }

    get editando() {
        return Boolean(this.estabelecimento.id);
    }

    private carregarEstabelecimento(codigo: number) {
        this.estabelecimentosService.buscarPorCodigo(codigo)
            .subscribe(estabelecimento => {
                this.estabelecimento = estabelecimento;
            });
    }

    salvar() {
        if (this.editando) {
            this.atualizarEstabelecimento(this.estabelecimento.id);
        } else {
            this.adicionarEstabelecimento();
        }
    }

    atualizarEstabelecimento(codigo: number) {
        this.estabelecimentosService.buscarPorCodigo(codigo)
            .subscribe(estabelecimento => {
                this.estabelecimento = estabelecimento;
            });

        this.estabelecimentosService.atualizar(this.estabelecimento)
            .subscribe(estabelecimento => {
                this.estabelecimento = estabelecimento;
                this.toastyService.success('Estabelecimento atualizado com sucesso.');
            });
    }

    adicionarEstabelecimento() {
        this.estabelecimentosService.salvar(this.estabelecimento)
        .subscribe(() => {
            this.estabelecimento = {};
            this.toastyService.success('Estabelecimento salvo com sucesso.');
        });
    }
}
