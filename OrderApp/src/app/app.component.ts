import { Component } from '@angular/core';

import { OrderComponentComponent } from './order-component/order-component.component';

@Component({
  selector: 'app-root',
  imports: [ OrderComponentComponent],  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent {
  title = 'OrderApp';
  
}
