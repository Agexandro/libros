import { AutoresService } from './../servicios/autores.service';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Autor } from 'src/app/modelos/autor';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {
  autores: Autor[] = [];

  formAgregar = this.fb.group({
    id: ['',],
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    nacimiento: ['', Validators.required],
    contacto: this.fb.array([
      this.fb.group({
        direccion: ['',],
        telefono: ['',]
      })
    ])
  })

  constructor(
    private fb: FormBuilder,
    private servicoAutores: AutoresService
  ) { }

  ngOnInit(): void {
    this.obtenerAutores();
  }

  agregarAutor() {
    const autor = this.formAgregar.value;
    this.servicoAutores.agregar(autor).subscribe(respuesta => {
      if(respuesta){
        this.obtenerAutores();
      }
    });
  }

  obtenerAutores() {
    this.servicoAutores.obtener().subscribe(respuesta => this.autores = respuesta);
  }

  eliminarCamposContacto(index: number) {
    this.contacto.removeAt(index);
  }

  agregarCamposContacto() {
    const nuevoContacto = this.fb.group({
      direccion: ['',],
      telefono: ['',]
    });

    this.contacto.push(nuevoContacto);
    console.log(this.contacto.value);
  }

  get nombre() {
    return this.formAgregar.controls['nombre'];
  }

  get apellido() {
    return this.formAgregar.controls['apellido'];
  }

  get nacimiento() {
    return this.formAgregar.controls['nacimiento'];
  }

  get contacto() {
    return this.formAgregar.get('contacto') as FormArray;
  }

}
