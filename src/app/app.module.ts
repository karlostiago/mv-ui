import { ProfissionaisService } from './profissionais/profissionais.service';
import { HttpClientModule } from '@angular/common/http';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProfissionaisModule } from './profissionais/profissionais.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ProfissionaisModule,
    NavegacaoModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProfissionaisService],
  bootstrap: [AppComponent]
})
export class AppModule { }
