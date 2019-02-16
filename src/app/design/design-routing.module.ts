import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignMainComponent } from './design-main/design-main.component';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { loadStyle } from '../shared/utils';

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
export class DesignRoutingModule {

}


export interface DesignDependencies {
  styleLoad: Event;
  // items: Item[]

}
@Injectable()
class DesignResolver implements Resolve<Event> {
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Event> {

    return loadStyle('styles-design.js');
  }
}
