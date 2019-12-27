import { EstabelecimentosCadastroComponent } from './estabelecimentos/estabelecimentos-cadastro/estabelecimentos-cadastro.component';
import { EstabelecimentosPesquisarComponent } from './estabelecimentos/estabelecimentos-pesquisar/estabelecimentos-pesquisar.component';
import { ProfissionaisCadastroComponent } from './profissionais/profissionais-cadastro/profissionais-cadastro.component';
import { ProfissionaisPesquisarComponent } from './profissionais/profissionais-pesquisar/profissionais-pesquisar.component';
import { Routes, RouterModule } from '@angular/router';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { ProfissionaisService } from './profissionais/profissionais.service';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

const routers: Routes = [
    {path: 'profissionais', component: ProfissionaisPesquisarComponent},
    {path: 'profissionais/novo', component: ProfissionaisCadastroComponent},
    {path: 'profissionais/:id', component: ProfissionaisCadastroComponent},
    {path: 'estabelecimentos', component: EstabelecimentosPesquisarComponent},
    {path: 'estabelecimentos/novo', component: EstabelecimentosCadastroComponent}
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
    FormsModule,
    RouterModule.forRoot(routers)
  ],
  providers: [ProfissionaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
