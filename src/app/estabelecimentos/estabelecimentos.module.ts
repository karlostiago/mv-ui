import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstabelecimentosCadastroComponent } from './estabelecimentos-cadastro/estabelecimentos-cadastro.component';
import { EstabelecimentosPesquisarComponent } from './estabelecimentos-pesquisar/estabelecimentos-pesquisar.component';
import {InputMaskModule} from 'primeng/inputmask';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [EstabelecimentosCadastroComponent, EstabelecimentosPesquisarComponent],
  imports: [
    CommonModule,
    InputMaskModule,
    InputTextModule,
    ButtonModule,
    TableModule
  ],
  exports: [EstabelecimentosCadastroComponent, EstabelecimentosPesquisarComponent]
})
export class EstabelecimentosModule { }
