import { Profissional } from './../../model/profissional';
import { Telefone } from './../../model/telefone';
import { NgForm } from '@angular/forms';
import { ProfissionaisService } from './../profissionais.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-profissionais-cadastro',
  templateUrl: './profissionais-cadastro.component.html',
  styleUrls: ['./profissionais-cadastro.component.css']
})
export class ProfissionaisCadastroComponent implements OnInit {

    profissional: Profissional = new Profissional();
    telefone: Telefone = new Telefone();

    constructor(
        private route: ActivatedRoute,
        private profissionaisService: ProfissionaisService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        const id = this.route.snapshot.params['id'];

        if (id) {
            this.carregarProfissional(id);
        }
    }

    get editando() {
        return Boolean(this.profissional.id);
    }

    private carregarProfissional(codigo: number) {
        this.profissionaisService.buscarPorCodigo(codigo)
            .subscribe(profissional => {
                this.profissional = profissional;
            });
    }

    salvar() {
        if (this.editando) {
            this.atualizarProfissional(this.profissional.id);
        } else {
            this.adicionarProfissional();
        }
    }

    atualizarProfissional(codigo: number) {
        this.profissionaisService.buscarPorCodigo(codigo)
            .subscribe(profissional => {
                this.profissional = profissional;
            });

        this.profissionaisService.atualizar(this.profissional)
            .subscribe(profissional => {
                this.profissional = profissional;
                this.toastyService.success('Profissional atualizado com sucesso.');
            });
    }

    adicionarProfissional() {
        this.profissionaisService.salvar(this.profissional)
        .subscribe(() => {
            this.profissional = new Profissional();
            this.toastyService.success('Profissional salvo com sucesso.');
        });
    }

    incluirTelefone(form: NgForm) {
        if (this.profissional) {
            const telefone: Telefone = form.value;
            this.profissional.telefones.push(telefone);
            this.toastyService.success('Telefone incluído com sucesso.');
            form.reset();
        }
    }

    removerTelefone(telefone: Telefone) {
        const index = this.profissional.telefones.indexOf(telefone);
        this.profissional.telefones.splice(index, 1);
        this.toastyService.success('Telefone removido com sucesso.');
    }
}
