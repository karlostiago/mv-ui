import { ConfirmationService } from 'primeng/api';
import { Profissional } from './../model/profissional';
import { ProfissionaisService } from './../profissionais.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-profissionais-pesquisar',
  templateUrl: './profissionais-pesquisar.component.html',
  styleUrls: ['./profissionais-pesquisar.component.css']
})
export class ProfissionaisPesquisarComponent implements OnInit  {

    profissionais: Profissional[ ];
    @ViewChild('tabela', null) tabela;

    constructor(
        private profissionaisService: ProfissionaisService,
        private confirmation: ConfirmationService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        this.pesquisarTodos();
    }

    pesquisarTodos() {
        this.profissionaisService.pesquisar()
        .subscribe( profissional => this.profissionais = profissional );
    }

    pesquisarPorNome(form: NgForm) {
        this.profissionaisService.pesquisarPorNome(form.value.nome)
        .subscribe( profissional => this.profissionais = profissional );
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
        this.profissionaisService.delete(codigo)
        .subscribe(() => {
            this.pesquisarTodos();
            this.tabela.first = 0;
            this.toastyService.success('Profissional excluído com sucesso.');
        });
    }
}
