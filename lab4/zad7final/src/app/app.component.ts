import { Component } from '@angular/core';
import { trips } from './trips'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zad7final';
  trips = trips;
  bookedTrips: number = 0;


  updatebookedTrips(event: number){
    this.bookedTrips += event;
  }

  maxOrMin(trip){
    let min:number  = trips[0].price;
    let max:number = trips[0].price;
    for(let trip of trips){
      if(min > trip.price){
        min = trip.price;
      }
      if(max < trip.price){
        max = trip.price;
      }
    }
    if(trip.price == min){
      return{
        'border': '3px solid green',
      }
    }
    if(trip.price == max){
      return{
        'border': '3px solid red',
      }
    }

  }
}
