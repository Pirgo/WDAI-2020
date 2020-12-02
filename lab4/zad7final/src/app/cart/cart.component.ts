import { Component, Input, OnInit } from '@angular/core';

export interface CartElement {
  name: string,
  price: number,
  counter: number
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() cart: CartElement[];
  @Input() cartSum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
