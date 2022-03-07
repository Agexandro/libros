import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudAutoresRoutingModule } from './crud-autores-routing.module';
import { CrudAutoresComponent } from './crud-autores.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    CrudAutoresComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    CrudAutoresRoutingModule,
    ReactiveFormsModule
  ]
})
export class CrudAutoresModule { }
