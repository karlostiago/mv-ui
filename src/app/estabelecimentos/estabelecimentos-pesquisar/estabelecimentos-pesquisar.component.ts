import { ConfirmationService } from 'primeng/api';
import { Estabelecimento } from './../model/Estabelecimento';
import { EstabelecimentosService } from './../estabelecimentos.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-estabelecimentos-pesquisar',
  templateUrl: './estabelecimentos-pesquisar.component.html',
  styleUrls: ['./estabelecimentos-pesquisar.component.css']
})
export class EstabelecimentosPesquisarComponent implements OnInit {

    estabelecimentos: Estabelecimento[ ];
    @ViewChild('tabela', null) tabela;

    constructor(
        private estabelecimentosService: EstabelecimentosService,
        private confirmation: ConfirmationService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        this.pesquisarTodos();
    }

    pesquisarTodos() {
        this.estabelecimentosService.pesquisar()
        .subscribe( estabelecimento => this.estabelecimentos = estabelecimento );
    }

    pesquisarPorNome(form: NgForm) {
        this.estabelecimentosService.pesquisarPorNome(form.value.nome)
        .subscribe( estabelecimento => this.estabelecimentos = estabelecimento );
    }

    confirmarExclusao(codigo: number) {
        this.confirmation.confirm({
            message: 'Deseja excluir o registro de código ' + codigo + ' ?',
            header: 'Confirmar exclusão',
            icon: 'fa fa-question-circle',
            accept: () => {
                this.delete(codigo);
            }
        });
    }

    delete(codigo: number): void {
        this.estabelecimentosService.delete(codigo)
        .subscribe(() => {
            this.pesquisarTodos();
            this.tabela.first = 0;
            this.toastyService.success('Estabelecimento excluído com sucesso.');
        });
    }
}
