import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-component',
  imports: [],
  templateUrl: './item-component.component.html',
  styleUrl: './item-component.component.css'
})
export class ItemComponentComponent {
  @Input() ItemName: string;
  @Input() ItemPrice: number;

}
