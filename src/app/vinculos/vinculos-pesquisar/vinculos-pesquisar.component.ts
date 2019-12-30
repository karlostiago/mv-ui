import { ConfirmationService } from 'primeng/api';
import { VinculosService } from './../vinculos.service';
import { Vinculo } from './../../model/vinculo';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-vinculos-pesquisar',
  templateUrl: './vinculos-pesquisar.component.html',
  styleUrls: ['./vinculos-pesquisar.component.css']
})
export class VinculosPesquisarComponent implements OnInit {

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
        this.vinculosService.delete(codigo)
        .subscribe(() => {
            this.pesquisarTodos();
            this.tabela.first = 0;
            this.toastyService.success('Vinculo excluído com sucesso.');
        });
    }
}
