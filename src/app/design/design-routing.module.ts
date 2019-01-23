import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignMainComponent } from './design-main/design-main.component';

const routes: Routes = [
  {
    path: '',
    component: DesignMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
