import { AgregarComponent } from './agregar/agregar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudLibrosComponent } from './crud-libros.component';

const routes: Routes = [
  {
    path: '',
    component: CrudLibrosComponent,
    children: [
      {
        path: '', component: AgregarComponent
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudLibrosRoutingModule { }
