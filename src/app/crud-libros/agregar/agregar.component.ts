import { Libro } from './../../modelos/libro';
import { LibrosService } from './../servicios/libros.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  libros: Libro[] = [];

  formAgregar = this.fb.group({
    id: ['',],
    nombre: ['', Validators.required],
    autor: ['', Validators.required],
    isbn: ['', Validators.required],
    email: ['', Validators.required],
    precio: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    private servicioLibros: LibrosService
  ) { }

  ngOnInit(): void {
    this.obtenerLibros();
  }

  obtenerLibros() {
    this.servicioLibros.obtener().subscribe(respuesta => this.libros = respuesta);
  }

  agregarLibro() {
    const libro: Libro = this.formAgregar.value;
    this.servicioLibros.agregar(libro).subscribe(respuesta => {
      if (respuesta) {
        this.obtenerLibros();
      }
    });
  }

  get nombre() {
    return this.formAgregar.controls['nombre'];
  }

  get autor() {
    return this.formAgregar.controls['autor'];
  }

  get isbn() {
    return this.formAgregar.controls['isbn'];
  }

  get email() {
    return this.formAgregar.controls['email'];
  }

  get precio() {
    return this.formAgregar.controls['precio'];
  }

}
