import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponentComponent } from '../item-component/item-component.component';

@Component({
  selector: 'app-order-component',
  imports: [CommonModule, ItemComponentComponent],
  templateUrl: './order-component.component.html',
  styleUrls: ['./order-component.component.css']
})
export class OrderComponentComponent {
  jsonString = '{"name":"Sayali", "itemlist":[{"item":"Mobile", "price":"25000"}, {"item":"Laptop", "price":"75000"}, {"item":"MacBook", "price":"150000"}]}';
  jsonobject = JSON.parse(this.jsonString);

  // constructor() {
  //   console.log(this.jsonobject.name); 
  // }

  itemList = this.jsonobject.itemlist;

  totalItems = this.itemList.length;
  totalPrice = this.itemList.reduce((sum: number, item: { price: any; }) => sum + Number(item.price), 0);
}


