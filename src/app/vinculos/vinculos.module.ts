import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinculosAtualizacaoComponent } from './../vinculos/vinculos-atualizacao/vinculos-atualizacao.component';
import { VinculosCadastroComponent } from './vinculos-cadastro/vinculos-cadastro.component';
import { VinculosPesquisarComponent } from './vinculos-pesquisar/vinculos-pesquisar.component';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'primeng/dialog';



@NgModule({
  declarations: [VinculosCadastroComponent, VinculosPesquisarComponent, VinculosAtualizacaoComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    RouterModule,
    TooltipModule,
    DialogModule
  ],
  exports: [VinculosPesquisarComponent, VinculosCadastroComponent, VinculosAtualizacaoComponent]
})
export class VinculosModule { }
