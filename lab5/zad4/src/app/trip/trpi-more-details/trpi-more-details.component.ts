import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartElement } from 'src/app/classes/cart-element';
import { Trip } from 'src/app/classes/trip';
import { CartService } from 'src/app/services/cart.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trpi-more-details',
  templateUrl: './trpi-more-details.component.html',
  styleUrls: ['./trpi-more-details.component.css']
})
export class TrpiMoreDetailsComponent implements OnInit {
  trip: Trip
  placesBooked
  cartElement: CartElement;
  constructor(private route: ActivatedRoute,
    private cartService: CartService,
    private tripService: TripService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      for(let trip of this.tripService.trips){
        if(trip.key == param.key){
          this.placesBooked = trip.places
          this.tripService.getTripsList().subscribe(trip=>{
            for(let trip1 of this.tripService.trips){
              if(trip1.key == param.key){
                this.trip = trip1;
                break
            }
          }})
          break
        } 
      }
    })
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
