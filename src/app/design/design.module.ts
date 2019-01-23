import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { DesignMainComponent } from './design-main/design-main.component';

@NgModule({
  declarations: [DesignMainComponent],
  imports: [
    CommonModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
