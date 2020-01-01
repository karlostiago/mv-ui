import { Estabelecimento } from './../../model/Estabelecimento';
import { EstabelecimentosService } from './../../estabelecimentos/estabelecimentos.service';
import { Profissional } from './../../model/profissional';
import { ActivatedRoute } from '@angular/router';
import { ProfissionaisService } from './../../profissionais/profissionais.service';
import { ConfirmationService } from 'primeng/api';
import { VinculosService } from './../vinculos.service';
import { Vinculo } from './../../model/vinculo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-vinculos-atualizacao',
  templateUrl: './vinculos-atualizacao.component.html',
  styleUrls: ['./vinculos-atualizacao.component.css']
})
export class VinculosAtualizacaoComponent implements OnInit {

    vinculos: Vinculo[];
    estabelecimentos: Estabelecimento[ ];
    profissionalSelecionado: Profissional = new Profissional();
    vinculoSelecionado: Vinculo = new Vinculo();
    @ViewChild('tabela', null) tabela;
    display: boolean = false;

    constructor(
        private estabelecimentosService: EstabelecimentosService,
        private profissionaisService: ProfissionaisService,
        private vinculosService: VinculosService,
        private confirmation: ConfirmationService,
        private toastyService: ToastyService,
        private route: ActivatedRoute,
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];
        this.estabelecimentos = [];
        this.vinculos = [];

        if (id) {
            this.carregarVinculo(id);
        }
    }

    showModal(vinculo: Vinculo) {

        this.todosEstabelecimentos();
        this.profissionaisService.buscarPorCodigo(vinculo.profissional.id)
        .subscribe(profissional => {
            this.profissionalSelecionado = profissional;
            this.carregaEstabelecimentoNaoAdicionados(this.profissionalSelecionado);
        });

        this.vinculoSelecionado = vinculo;
        this.display = true;
    }

    private carregaEstabelecimentoNaoAdicionados(profissional: Profissional) {
        this.estabelecimentosService.pesquisar()
        .subscribe( estabelecimentos => {
            this.estabelecimentos = estabelecimentos;

            let index = 0;
            this.profissionalSelecionado.estabelecimentos.forEach(estabelecimento => {
                this.estabelecimentos.forEach(estab => {
                    if (estab.id === estabelecimento.id) {
                        index = this.estabelecimentos.indexOf(estab);
                        this.estabelecimentos.splice(index, 1);
                    }
                });
            });
        });
    }

    incluir(estabelecimento: Estabelecimento) {

        let index = 0;
        this.vinculos.forEach(vinculo => {

            this.profissionalSelecionado.estabelecimentos.forEach(estab => {
                if (estab.id === this.vinculoSelecionado.estabelecimento.id) {
                    index = this.profissionalSelecionado.estabelecimentos.indexOf(estab);
                    this.profissionalSelecionado.estabelecimentos.splice(index, 1);
                    this.profissionalSelecionado.estabelecimentos.push(estabelecimento);
                    this.atualizar(vinculo, this.profissionalSelecionado);

                    return;
                }
            });
        });
    }

    private atualizar(vinculo: Vinculo, profissional: Profissional) {

        this.vinculosService.atualizar(this.vinculoSelecionado.id, this.profissionalSelecionado)
        .subscribe(() => {
            this.toastyService.success('Vinculo atualizado com sucesso.');
            this.display = false;

            this.vinculos = new Array();
            this.carregarVinculo(this.vinculoSelecionado.id);
        });
    }

    private todosEstabelecimentos() {
        this.estabelecimentosService.pesquisar()
            .subscribe( estabelecimentos => {
                this.estabelecimentos = estabelecimentos;
            });
    }

    private carregarVinculo(codigo: number) {
        this.vinculosService.buscarPorId(codigo)
            .subscribe(vinculo => {
                this.vinculos.push(vinculo);
            });
    }

}
