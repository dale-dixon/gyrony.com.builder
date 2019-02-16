import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { loadStyle } from './shared/utils';

const routes: Routes = [
  {
    path: 'design',
    loadChildren: './design/design.module#DesignModule'
  },
  {
    path: 'technology',
    loadChildren: './technology/technology.module#TechnologyModule'
  }, {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

