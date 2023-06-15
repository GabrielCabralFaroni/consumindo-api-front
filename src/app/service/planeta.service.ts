import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Planeta } from '../models/planeta';



@Injectable({
  providedIn: 'root'
})
export class PlanetaService {
  private url = 'http://localhost/consumindo-api-externa/conexao.php';

  constructor(private http: HttpClient) { }

  buscarPlanetas(): Observable<Planeta[]> {
    return this.http.get<Planeta[]>(this.url);
  }
}

