import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignMainComponent } from './design-main/design-main.component';
import { loadStyle, loadScript } from '../shared/utils';


loadStyle('theme-design.js');
@NgModule({
  declarations: [DesignMainComponent],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
