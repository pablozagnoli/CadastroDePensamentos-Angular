import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendizado Angular',
    autoria: 'Dev',
    modelo: 'modelo2'
  }

  constructor() { }

  ngOnInit(): void {
  }


  CriarPensamento(){
    alert("Novo Pensamento Criado")
  }

  CancelarPensamento(){
    alert("Novo Pensamento Cancelado")
  }
}
