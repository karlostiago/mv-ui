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
       this.profissionaisService.buscarPorCodigo(vinculo.id)
        .subscribe(profissional => this.profissionalSelecionado = profissional);

       this.vinculoSelecionado = vinculo;
       this.todosEstabelecimentos();
       this.display = true;
    }

    incluir(estabelecimento: Estabelecimento) {
        let index = 0;
        for (const estab of this.profissionalSelecionado.estabelecimentos) {
            if (estab.nome === this.vinculoSelecionado.nomeEstabelecimento) {
                this.profissionalSelecionado.estabelecimentos.splice(index, 1);
                this.profissionalSelecionado.estabelecimentos.push(estabelecimento);
            }
            index++;
        }

        index = 0;
        for (const vinc of this.vinculos) {
            if (vinc.nomeEstabelecimento === this.vinculoSelecionado.nomeEstabelecimento) {
                this.vinculos.splice(index, 1);
            }
            index++;
        }

        this.vinculosService.atualizar(this.profissionalSelecionado)
        .subscribe(() => {
            this.toastyService.success('Profissional atualizado com sucesso.');
            this.display = false;
            this.carregarVinculo(this.profissionalSelecionado.id);
        });
    }

    private todosEstabelecimentos() {
        this.estabelecimentosService.pesquisar()
        .subscribe( estabelecimento => this.estabelecimentos = estabelecimento );
    }

    private carregarVinculo(codigo: number) {
        this.profissionaisService.buscarPorCodigo(codigo)
            .subscribe(profissional => {
                for (const estabelecimento of profissional.estabelecimentos) {
                    const vinculo: Vinculo = new Vinculo();
                    vinculo.id = profissional.id;
                    vinculo.nomeProfissional = profissional.nome;
                    vinculo.nomeEstabelecimento = estabelecimento.nome;
                    this.vinculos.push(vinculo);
                }
            });
    }

}
