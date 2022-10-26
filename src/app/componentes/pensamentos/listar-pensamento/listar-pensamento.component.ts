import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { results, resultoDTO } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {


  listaPensamentos: results[] = [];

  ResultoDTO: resultoDTO = {
    pensamentos: this.listaPensamentos
  };

  constructor(private service: PensamentoService) { }

  async ngOnInit() {
    this.ListarPensamentos();
  }

  ListarPensamentos() {
    (this.service.Listar()).subscribe((listaPensamento) => {
      this.listaPensamentos = listaPensamento.results,

      console.log(this.listaPensamentos)
    })
  }
}

