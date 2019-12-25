import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissionais-pesquisar',
  templateUrl: './profissionais-pesquisar.component.html',
  styleUrls: ['./profissionais-pesquisar.component.css']
})
export class ProfissionaisPesquisarComponent  {

    profissionais = [
        {id: '1', nome: 'Nome Profissional Teste 1', endereco: 'Endereço Teste 1', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '2', nome: 'Nome Profissional Teste 2', endereco: 'Endereço Teste 2', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '3', nome: 'Nome Profissional Teste 3', endereco: 'Endereço Teste 3', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '4', nome: 'Nome Profissional Teste 4', endereco: 'Endereço Teste 4', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '5', nome: 'Nome Profissional Teste 5', endereco: 'Endereço Teste 5', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '6', nome: 'Nome Profissional Teste 6', endereco: 'Endereço Teste 6', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '7', nome: 'Nome Profissional Teste 7', endereco: 'Endereço Teste 7', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
        {id: '8', nome: 'Nome Profissional Teste 8', endereco: 'Endereço Teste 8', telefoneCelular: '8888-8888', telefoneFixo: '3333-3333'},
    ];
    
}
