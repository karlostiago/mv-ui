import { ProfissionaisService } from './profissionais/profissionais.service';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfissionaisModule,
    NavegacaoModule,
    HttpClientModule
  ],
  providers: [ProfissionaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
