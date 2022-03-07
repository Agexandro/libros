import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: '', component: MainComponent},
      { path: 'crud-libros', loadChildren: () => import('../crud-libros/crud-libros.module').then(m => m.CrudLibrosModule) },
      { path: 'crud-autores', loadChildren: () => import('../crud-autores/crud-autores.module').then(m => m.CrudAutoresModule) },
    ]
  },
  {
    path: '**',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
