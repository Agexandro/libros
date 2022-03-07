import { Usuario } from './../modelos/usuario';
import { LoginService } from './../servicios/login.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['',],
    contrasenia: ['',]
  });

  constructor(
    private fb: FormBuilder,
    private servicioLogin: LoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  iniciarSesion() {
    const usuario: Usuario = this.loginForm.value;
    this.servicioLogin.obtener(usuario).subscribe(respuesta => {
      if (respuesta.length > 0) {
        localStorage.setItem("usuario", respuesta[0].email);
        this.route.navigate(['/', 'dashboard']);
      } else {
        alert("Fallo al iniciar sesion");
      }
    })
  }
}
