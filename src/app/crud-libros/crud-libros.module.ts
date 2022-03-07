import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudLibrosRoutingModule } from './crud-libros-routing.module';
import { CrudLibrosComponent } from './crud-libros.component';
import { AgregarComponent } from './agregar/agregar.component';

@NgModule({
  declarations: [
    CrudLibrosComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    CrudLibrosRoutingModule,
    ReactiveFormsModule
  ],
})
export class CrudLibrosModule { }
