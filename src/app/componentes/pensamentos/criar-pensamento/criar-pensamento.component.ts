import { PensamentoService } from './../pensamento.service';
import { results, resultoDTO } from './../pensamento';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento: results = {
    idd: 1,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor(
    private service: PensamentoService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }

  criarPensamento() {
    this.service.Criar(this.pensamento).subscribe(()=>{
      this.route.navigate(['/listarPensamento'])
    })
  }

  cancelar() {
    alert("Ação cancelada!")
  }

}
