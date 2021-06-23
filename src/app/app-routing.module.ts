import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Detalles',      component: DetallesComponent },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
