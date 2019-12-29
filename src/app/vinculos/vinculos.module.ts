import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinculosCadastroComponent } from './vinculos-cadastro/vinculos-cadastro.component';
import { VinculosPesquisarComponent } from './vinculos-pesquisar/vinculos-pesquisar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [VinculosCadastroComponent, VinculosPesquisarComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FormsModule,
    RouterModule,
    TooltipModule
  ],
  exports: [VinculosPesquisarComponent]
})
export class VinculosModule { }
