import { Component, Input, OnInit } from '@angular/core';
import { CartElement } from 'src/app/classes/cart-element';
import { Trip } from 'src/app/classes/trip';
import { CartService } from 'src/app/services/cart.service';
import { TripServiceService } from 'src/app/services/trip-service.service';

@Component({
  selector: 'app-trip-banner',
  templateUrl: './trip-banner.component.html',
  styleUrls: ['./trip-banner.component.css']
})
export class TripBannerComponent implements OnInit {

  @Input() trip: Trip
  cartElement
  placesBooked: number

  constructor(private tripService: TripServiceService, private cartService: CartService) { }

  ngOnInit(): void {
    this.placesBooked = this.trip.places
  }

  addReservation(){
    this.placesBooked++;
    this.tripService.updateTrip(this.trip.key, {places: this.placesBooked})
    if(this.placesBooked == 1){
      let cartElement = new CartElement
      cartElement.cost = this.trip.price
      cartElement.name = this.trip.name
      cartElement.places = this.placesBooked
      cartElement.tripKey = this.trip.key
      this.cartService.addToCart(cartElement)
      this.cartElement = cartElement
      console.log(this.cartService.items)
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

  deleteTrip(){
    this.tripService.deleteTrip(this.trip.key)
    for(let cartEl of this.cartService.items){
      if(cartEl.tripKey == this.trip.key){
        this.cartService.rmvFromCart(cartEl.key)
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


}
