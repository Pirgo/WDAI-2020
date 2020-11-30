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
}

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input() trip;
  @Input() index;
  @Output() updateBookedTrips = new EventEmitter<number>()
  placesBooked: number = 0;
  raiting: number =2;
  constructor() { }

  ngOnInit(): void {
  }

  addReservation(){
    if(this.placesBooked == 0){
      this.updateBookedTrips.emit(1);
    }
    this.placesBooked += 1;
  }

  rmvReservation(){
    this.placesBooked -=1;
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
    }
      trips.splice(this.index, 1)
  }

  updateRaiting(cnt){
    this.raiting = cnt;
  }


}
