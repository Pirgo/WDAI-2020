import { Component, Input, OnInit } from '@angular/core';
import { CartElement } from 'src/app/classes/cart-element';
import { Trip } from 'src/app/classes/trip';
import { CartService } from 'src/app/services/cart.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {


  @Input() trip: Trip;
  cartElement: CartElement 
  placesBooked: number
  raiting: number

  constructor(private tripService: TripService, private cartService: CartService) { }

  ngOnInit(): void {
    this.placesBooked = this.trip.places;
    this.raiting = this.trip.raiting;
  }

  deleteTrip(){
    this.tripService.deleteTrip(this.trip.key)
    for(let cartEl of this.cartService.items){
      if(cartEl.tripKey == this.trip.key){
        this.cartService.rmvFromCart(cartEl.key)
      }
    }
  }

  addReservation(){
    this.placesBooked ++;
    this.tripService.updateTrip(this.trip.key, {places: this.placesBooked})
    if(this.placesBooked == 1){
      let cartEl = new CartElement
      cartEl.cost = this.trip.price
      cartEl.name = this.trip.name
      cartEl.places = this.placesBooked
      cartEl.tripKey = this.trip.key
      this.cartElement = cartEl
      this.cartService.addToCart({...this.cartElement})
    }
    else{
      //szukam klucza
      for(let cartEl of this.cartService.items){
        if(cartEl.tripKey == this.trip.key){
          this.cartService.updateCart(cartEl.key, {places: this.placesBooked})
        }
      }
    }
  }

  rmvReservation(){
    this.placesBooked--;
    this.tripService.updateTrip(this.trip.key, {places: this.placesBooked})
    if(this.placesBooked == 0){
      for(let cartEl of this.cartService.items){
        if(cartEl.tripKey == this.trip.key){
          this.cartService.rmvFromCart(cartEl.key)
        }
      }
    }
    else{
      for(let cartEl of this.cartService.items){
        if(cartEl.tripKey == this.trip.key){
          this.cartService.updateCart(cartEl.key, {places: this.placesBooked})
        }
      }
    }
  }

  noPlacesLeft(){
    return this.placesBooked == this.trip.maxCapacity
  }

  somePlacesLeft(){
    return this.trip.maxCapacity-this.placesBooked < 3 && this.placesBooked != this.trip.maxCapacity
  }

  styleDisplayAddBtn(){
    let myStyles = {
      'display' : 'inline',
    }
    if (this.placesBooked == this.trip.maxCapacity){
      myStyles = {'display' : 'none'}
    }
    return myStyles;
  }

  styleDisplayRmvBtn(){
    let myStyles = {
      'display' : 'inline',
    }
    if (this.placesBooked == 0){
      myStyles = {'display' : 'none'}
    }
    return myStyles;
  }

  updateRaiting(cnt){
    this.tripService.updateTrip(this.trip.key, {raiting: cnt})
  }

}
