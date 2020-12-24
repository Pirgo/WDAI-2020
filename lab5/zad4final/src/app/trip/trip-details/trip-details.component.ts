import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartElement } from 'src/app/classes/cart-element';
import { CartService } from 'src/app/services/cart.service';
import { TripServiceService } from 'src/app/services/trip-service.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tripService: TripServiceService, private cartService: CartService) { }

  tripRef
  trip
  placesBooked
  cartElement
  raiting: number

  ngOnInit(): void {
    this.route.params.subscribe(param=> this.tripRef = param.key)
    this.tripService.getTrip(this.tripRef).subscribe(trip=>{this.trip = trip
    this.placesBooked = trip.places
    this.raiting = trip.raiting})
  }

  addReservation(){
    this.placesBooked++
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
