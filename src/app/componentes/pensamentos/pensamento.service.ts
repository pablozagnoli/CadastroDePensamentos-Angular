import { Pensamento } from './pensamento';
import { ListarPensamentoComponent } from './listar-pensamento/listar-pensamento.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "https://parseapi.back4app.com/parse/classes/PENSAMENTO";

  constructor(private http: HttpClient) { }

Listar() {
return this.http.get<Pensamento[]>(this.API, {headers: {'X-Parse-Application-Id':'m3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
                                                      'X-Parse-REST-API-Key':'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'}})
}

}
