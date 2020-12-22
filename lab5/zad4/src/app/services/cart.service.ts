import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CartElement } from '../classes/cart-element';
import { Trip } from '../classes/trip';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any
  private cartPath = 'cart'
  cartRef: AngularFireList<CartElement>

  constructor(private db: AngularFireDatabase) {
    this.cartRef = db.list(this.cartPath)
    this.items = this.cartRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(trips =>{
      this.items = trips;
    })
  }

  addToCart(cartElement: CartElement){
    this.cartRef.push({...cartElement})
    console.log(cartElement)
  }

  rmvFromCart(key: string){
    this.cartRef.remove(key)
  }

  updateCart(key: string, value: any) {
    this.cartRef.update(key, value)
  }
  getCartList(){
    return this.items
  }
  
}
