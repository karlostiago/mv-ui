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


const routers: Routes = [
    {path: 'profissionais', component: ProfissionaisPesquisarComponent},
    {path: 'profissionais/novo', component: ProfissionaisCadastroComponent},
    {path: 'profissionais/:id', component: ProfissionaisCadastroComponent},
    {path: 'estabelecimentos', component: EstabelecimentosPesquisarComponent},
    {path: 'estabelecimentos/novo', component: EstabelecimentosCadastroComponent},
    {path: 'estabelecimentos/:id', component: EstabelecimentosCadastroComponent}
];

@NgModule({
  declarations: [
    AppComponent
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
    BrowserAnimationsModule
  ],
  providers: [
    EstabelecimentosService,
    ProfissionaisService,
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
