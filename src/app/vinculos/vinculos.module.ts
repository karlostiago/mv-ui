import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VinculosCadastroComponent } from './vinculos-cadastro/vinculos-cadastro.component';
import { VinculosPesquisarComponent } from './vinculos-pesquisar/vinculos-pesquisar.component';



@NgModule({
  declarations: [VinculosCadastroComponent, VinculosPesquisarComponent],
  imports: [
    CommonModule
  ]
})
export class VinculosModule { }
