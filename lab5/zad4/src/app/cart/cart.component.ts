import { Component, OnInit } from '@angular/core';
import { CartElement } from '../classes/cart-element';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  
  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    
  }

  getCostSum(){
    let res = 0
    for(let cartElement of this.cartService.items){
      res += cartElement.cost * cartElement.places
    }
    return res
  }

  
  

}
