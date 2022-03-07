import { Usuario } from './../modelos/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private ruta = `${environment.url}${environment.rutas.usuarios}`;

  constructor(
    private http: HttpClient
  ) { }

  obtener(usuario: Usuario): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.ruta, { params: { email: usuario.email, contrasenia: usuario.contrasenia } });
  }

}
