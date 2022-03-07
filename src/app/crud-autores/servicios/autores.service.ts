import { Autor } from './../../modelos/autor';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {
  private ruta = `${environment.url}${environment.rutas.autores}`;

  constructor(
    private http: HttpClient
  ) { }

  obtener(): Observable<Autor[]> {
    return this.http.get<Autor[]>(this.ruta);
  }

  agregar(autor: Autor) {
    return this.http.post<Autor>(this.ruta, autor);
  }
}
