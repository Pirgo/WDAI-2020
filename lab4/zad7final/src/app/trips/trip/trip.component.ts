import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trips } from '../../trips'

export interface Trip{
  name: string
  destination: string
  beginDate: string
  endDate: any
  price: number
  maxCapacity: number
  description: string
  imgURL: string
  raiting: number
  places: number
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input() trip;
  // @Input() index;
  @Output() updateBookedTrips = new EventEmitter<number>()
  @Output() addToCart = new EventEmitter();
  @Output() rmvFromCart = new EventEmitter();
  @Output() deleteFromCart = new EventEmitter();
  placesBooked: number;
  raiting: number;
  constructor() { }

  ngOnInit(): void {
    this.raiting = this.trip.raiting
    this.placesBooked = this.trip.places
  }



  addReservation(){
    if(this.placesBooked == 0){
      this.updateBookedTrips.emit(1);
    }
    this.placesBooked += 1;
    this.trip.places += 1;
    this.addToCart.emit(this.trip);
  }

  rmvReservation(){
    this.placesBooked -=1;
    this.rmvFromCart.emit(this.trip);
    if(this.placesBooked == 0){
      this.updateBookedTrips.emit(-1);
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

  deleteTrip(){
    if(this.placesBooked > 0){
      this.updateBookedTrips.emit(-1);
      this.deleteFromCart.emit([this.trip, this.placesBooked]);
    }
    for(let t in trips){
      if(trips[t] == this.trip){
        trips.splice(parseInt(t),1)
      }
    }
  }

  updateRaiting(cnt){
    for(let t in trips){
      if (trips[t] == this.trip){
        trips[t].raiting = cnt;
      }
    }

  }


}
