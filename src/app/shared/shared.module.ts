import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrainComponent } from './brain/brain.component';

@NgModule({
  declarations: [BrainComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BrainComponent
  ]
})
export class SharedModule { }
