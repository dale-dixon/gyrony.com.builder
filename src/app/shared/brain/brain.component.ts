import { Component, Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss'],
})
export class BrainComponent {

  @Output() selected = new EventEmitter();

}
