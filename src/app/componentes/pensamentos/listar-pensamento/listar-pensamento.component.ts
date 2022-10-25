import { PensamentoService } from './../pensamento.service';
import { Component, OnInit } from '@angular/core';
import { results } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: results[] = [];

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    this.service.Listar().subscribe((listaPensamento) => {
      this.listaPensamentos = listaPensamento
    })
  }
}

