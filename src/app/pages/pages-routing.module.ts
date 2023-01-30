import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { StaticModule } from '../static/static.module';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { ChartComponent } from '../chart/chart.component';


const routes: Routes = [

  {
    path: 'dashboard',
    component: PagesComponent,
    //Rutas hijas
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'product',
        component: StudentComponent,
      },
      {
        path: 'catalogue',
        component: CatalogueComponent,
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'carrito',
        component: CarritoComponent,
      },
      {
        path: 'chart',
        component: ChartComponent,
      },


    ],
  },
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StaticModule,
    RouterModule.forChild(routes)
  ]
  //Forchild invoca a los hijos
})
export class PagesRoutingModule { }
