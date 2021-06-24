import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule, Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { Page404Component } from './pages/page404/page404.component';
import { ApiServiceService } from './api-service.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DateService } from './date.service';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'Detalles', component: DetallesComponent },
  { path: '**', component: Page404Component }
];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetallesComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  
  ],
  providers: [
    ApiServiceService,
    DateService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
