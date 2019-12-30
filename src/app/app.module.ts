import { VinculosService } from './vinculos/vinculos.service';
import { VinculosCadastroComponent } from './vinculos/vinculos-cadastro/vinculos-cadastro.component';
import { VinculosModule } from './vinculos/vinculos.module';
import { VinculosPesquisarComponent } from './vinculos/vinculos-pesquisar/vinculos-pesquisar.component';
import { EstabelecimentosService } from './estabelecimentos/estabelecimentos.service';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { ToastyModule } from 'ng2-toasty';

import { AppComponent } from './app.component';
import { EstabelecimentosCadastroComponent } from './estabelecimentos/estabelecimentos-cadastro/estabelecimentos-cadastro.component';
import { EstabelecimentosPesquisarComponent } from './estabelecimentos/estabelecimentos-pesquisar/estabelecimentos-pesquisar.component';
import { ProfissionaisCadastroComponent } from './profissionais/profissionais-cadastro/profissionais-cadastro.component';
import { ProfissionaisPesquisarComponent } from './profissionais/profissionais-pesquisar/profissionais-pesquisar.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { ProfissionaisService } from './profissionais/profissionais.service';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { VinculosAtualizacaoComponent } from './vinclos/vinculos-atualizacao/vinculos-atualizacao.component';


const routers: Routes = [
    {path: 'profissionais', component: ProfissionaisPesquisarComponent},
    {path: 'profissionais/novo', component: ProfissionaisCadastroComponent},
    {path: 'profissionais/:id', component: ProfissionaisCadastroComponent},
    {path: 'estabelecimentos', component: EstabelecimentosPesquisarComponent},
    {path: 'estabelecimentos/novo', component: EstabelecimentosCadastroComponent},
    {path: 'estabelecimentos/:id', component: EstabelecimentosCadastroComponent},
    {path: 'vinculos', component: VinculosPesquisarComponent},
    {path: 'vinculos/novo', component: VinculosCadastroComponent},
    {path: 'vinculos/:id', component: VinculosCadastroComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    VinculosAtualizacaoComponent
  ],
  imports: [
    BrowserModule,
    ProfissionaisModule,
    EstabelecimentosModule,
    NavegacaoModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    ToastyModule.forRoot(),
    ConfirmDialogModule,
    BrowserAnimationsModule,
    VinculosModule
  ],
  providers: [
    EstabelecimentosService,
    ProfissionaisService,
    VinculosService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
