import { ProfissionaisService } from './../profissionais.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profissionais-cadastro',
  templateUrl: './profissionais-cadastro.component.html',
  styleUrls: ['./profissionais-cadastro.component.css']
})
export class ProfissionaisCadastroComponent implements OnInit {

  constructor(private route: ActivatedRoute, private profissionaisService: ProfissionaisService) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];

      if (id) {
        this.carregarProfissional(id);
      }
  }

  carregarProfissional(id: number) {
    console.log(this.profissionaisService.buscarPorId(id));
  }
}
