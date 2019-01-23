import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

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
