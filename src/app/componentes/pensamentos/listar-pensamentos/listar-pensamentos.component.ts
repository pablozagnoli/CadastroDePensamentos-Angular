import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css']
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Teste 1',
      autoria: 'Nay',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Teste 2',
      autoria: 'Nay',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Teste 3',
      autoria: 'Nay',
      modelo: 'modelo3'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }


}
