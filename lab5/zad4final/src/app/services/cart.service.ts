import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { CartElement } from '../classes/cart-element';
import { Trip } from '../classes/trip';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private dbPath = 'cart'

  cartRef: AngularFireList<CartElement>
  items: CartElement[]
  cartItems: Observable<CartElement[]>

  constructor(private db: AngularFireDatabase) {
    this.cartRef = db.list(this.dbPath)
    
    this.cartRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(trips =>{ 
      this.items = trips;
    })

    this.cartItems = this.cartRef.snapshotChanges().pipe(
      map(changes=>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() })))
    )
    
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

  getCartItems(){
    return this.cartItems
  }


}
