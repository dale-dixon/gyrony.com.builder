import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TechnologyRoutingModule } from './technology-routing.module';
import { TechnologyMainComponent } from './technology-main/technology-main.component';

@NgModule({
  declarations: [TechnologyMainComponent],
  imports: [
    CommonModule,
    TechnologyRoutingModule
  ]
})
export class TechnologyModule { }
