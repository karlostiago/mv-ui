import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfissionaisPesquisarComponent } from './profissionais-pesquisar/profissionais-pesquisar.component';
import { ProfissionaisCadastroComponent } from './profissionais-cadastro/profissionais-cadastro.component';



@NgModule({
  declarations: [ProfissionaisPesquisarComponent, ProfissionaisCadastroComponent],
  imports: [
    CommonModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [ProfissionaisPesquisarComponent, ProfissionaisCadastroComponent]
})
export class ProfissionaisModule { }
