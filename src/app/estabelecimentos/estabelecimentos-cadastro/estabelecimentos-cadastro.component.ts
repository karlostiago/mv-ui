import { NgForm } from '@angular/forms';
import { Estabelecimento } from './../../model/Estabelecimento';
import { Telefone } from './../../model/telefone';
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

    estabelecimento: Estabelecimento = new Estabelecimento();
    telefone: Telefone = new Telefone();

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
            console.log('salvando...');
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
            this.estabelecimento = new Estabelecimento();
            this.toastyService.success('Estabelecimento salvo com sucesso.');
        });
    }

    incluirTelefone(form: NgForm) {
        if (this.estabelecimento) {
            const telefone: Telefone = form.value;
            this.estabelecimento.telefones.push(telefone);
            this.toastyService.success('Telefone incluído com sucesso.');
            form.reset();
        }
    }

    removerTelefone(telefone: Telefone) {
        const index = this.estabelecimento.telefones.indexOf(telefone);
        this.estabelecimento.telefones.splice(index, 1);
        this.toastyService.success('Telefone removido com sucesso.');
    }
}
