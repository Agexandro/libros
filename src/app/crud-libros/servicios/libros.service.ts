import { environment } from './../../../environments/environment';
import { Libro } from './../../modelos/libro';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private ruta = `${environment.url}${environment.rutas.libros}`;

  constructor(private http: HttpClient) { }

  obtener(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.ruta);
  }

  agregar(libro: Libro) {
    return this.http.post<Libro>(this.ruta, libro);
  }
}
