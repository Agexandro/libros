import { AgregarComponent } from './agregar/agregar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudAutoresComponent } from './crud-autores.component';

const routes: Routes = [
  {
    path: '',
    component: CrudAutoresComponent,
    children: [
      {
        path: '',
        component: AgregarComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudAutoresRoutingModule { }
