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
    @ViewChild('tabela', null) tabela;

    constructor(
        private vinculosService: VinculosService,
        private confirmation: ConfirmationService,
        private toastyService: ToastyService
    ) { }

    ngOnInit() {
        this.pesquisarTodos();
    }

    private pesquisarTodos() {
        this.vinculosService.pesquisar()
        .subscribe( vinculo => this.vinculos = vinculo );
    }

}
