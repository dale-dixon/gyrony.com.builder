import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brain',
  templateUrl: './brain.component.html',
  styleUrls: ['./brain.component.scss'],
})
export class BrainComponent {

  constructor(private router: Router) { }

  routeTo(route: string) {
    this.router.navigate([route]);
  }
}
