import { Component } from '@angular/core';
import { fadeAnimation } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'welcome to gyrony.com';

  constructor() {
   // loadScript('./assets/test.js').then(x => console.log(x)).catch(x => console.log(x));
    
  }
}
