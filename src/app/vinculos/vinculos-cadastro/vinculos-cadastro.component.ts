import { VinculosService } from './../vinculos.service';
import { EstabelecimentosService } from './../../estabelecimentos/estabelecimentos.service';
import { ConfirmationService } from 'primeng/api';
import { ProfissionaisService } from './../../profissionais/profissionais.service';
import { Profissional } from './../../model/profissional';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { Estabelecimento } from 'src/app/model/Estabelecimento';

@Component({
  selector: 'app-vinculos-cadastro',
  templateUrl: './vinculos-cadastro.component.html',
  styleUrls: ['./vinculos-cadastro.component.css']
})
export class VinculosCadastroComponent implements OnInit {

    profissionais: Profissional[ ];
    estabelecimentos: Estabelecimento[ ];
    profissionalSelecionado: Profissional = new Profissional();
    display: boolean = false;
    constructor(
        private estabelecimentosService: EstabelecimentosService,
        private profissionaisService: ProfissionaisService,
        private confirmation: ConfirmationService,
        private vinculosService: VinculosService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        this.todosProfissionais();
    }

    salvar() {
        this.vinculosService.salvar(this.profissionalSelecionado)
        .subscribe(() => {
            this.profissionalSelecionado = new Profissional();
            this.toastyService.success('Vinculo realizado salvo com sucesso.');
        });
    }

    private todosProfissionais() {
        this.profissionaisService.pesquisar()
        .subscribe( profissional => this.profissionais = profissional );
    }

    private todosEstabelecimentos() {
        this.estabelecimentosService.pesquisar()
        .subscribe( estabelecimento => this.estabelecimentos = estabelecimento );
    }

    showModal(profissional: Profissional) {

        if (profissional.estabelecimentos === null) {
            profissional.estabelecimentos = [];
        }

        this.profissionalSelecionado = profissional;
        this.todosEstabelecimentos();
        this.display = true;
    }

    incluirEstabelecimento(estabelecimento: Estabelecimento) {
        this.profissionalSelecionado.estabelecimentos.push(estabelecimento);

        const index = this.estabelecimentos.indexOf(estabelecimento);
        this.estabelecimentos.splice(index, 1);

        this.toastyService.success('Estabelecimento incluido com sucesso.');
    }
}
