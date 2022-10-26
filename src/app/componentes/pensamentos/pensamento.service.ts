import { results, resultoDTO } from './pensamento';
import { ListarPensamentoComponent } from './listar-pensamento/listar-pensamento.component';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  private readonly API = "https://parseapi.back4app.com/parse/classes/PENSAMENTO";

  private readonly API2 = 'http://localhost:3000/results';

  constructor(private http: HttpClient) { }

  Listar(): Observable<any> {
    let result = this.http.get<any>(this.API, {
      headers: {
        'X-Parse-Application-Id': 'm3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
        'X-Parse-REST-API-Key': 'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'
      }
    });
    return result;
  }

  Criar(pensamento: results): Observable<results> {
    let result: Observable<results> = this.http.post<results>(this.API, pensamento,{
        headers: {
          'X-Parse-Application-Id': 'm3UgfLRTEySnj2ZQ52K8g4eJePPGCEbPOc5i31Pf',
          'X-Parse-REST-API-Key': 'XghWPrldwIgCSBgq57ytNtrbTNmBLz9iQ5e1BIIj'
        }
      })
      return result;
  }

  Listar2(): Observable<results[]> {
    let result: Observable<results[]> = this.http.get<results[]>(this.API2)
    return result;
  }
}
