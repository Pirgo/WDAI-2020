import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { TripService } from 'src/app/services/trip.service';

@Component({
  selector: 'app-trips-list',
  templateUrl: './trips-list.component.html',
  styleUrls: ['./trips-list.component.css']
})
export class TripsListComponent implements OnInit {

  unfilteredTrips: any
  trips: any
  filterTab: (string | number | any[]) = [[], -1, -1, [], '', ''];
  
  constructor(private tripService: TripService, private cartService: CartService) { }

  ngOnInit(): void {
    console.log("ddd")
    console.log(this.trips)
    this.trips = null
    console.log(this.trips)
    this.getTripsList()
    console.log(this.filterTab)
  }

  getTripsList(){
    console.log("errorik")
    this.tripService.getTripsList().subscribe(trips =>{
      this.unfilteredTrips = trips;
      this.trips = trips.filter(trip => this.lolo(trip));
    })
  }


  lolo(data){
    console.log("lolo")
    console.log(data)
    let matchDest: boolean;
    let matchPrice: boolean;
    let matchRaiting: boolean;
    let matchBeginDate: boolean;
    let matchEndDate: boolean;
    matchDest = this.checkDest(data)
    matchRaiting = this.checkRaiting(data)
    matchPrice = this.checkPrice(data)
    matchBeginDate = this.checkBeginDate(data)
    matchEndDate = this.checkEndDate(data);

    return matchDest && matchRaiting && matchPrice && matchBeginDate && matchEndDate
    
  }

  checkDest(data){
    if(this.filterTab[0].length == 0) return true;
    if(this.filterTab[0].includes(data.destination)) {
      return true;}
    return false
  }

  checkRaiting(data){
    if(this.filterTab[3].length == 0) return true;
    if(this.filterTab[3].includes(data.raiting)) return true;
    return false
  }

  checkPrice(data){
    if(this.filterTab[1] < 0 || this.filterTab[2] < 0) return true
    return data.price >= this.filterTab[1] && data.price <= this.filterTab[2]
  }

  checkBeginDate(data){
    if(this.filterTab[4] == '') return true
    return data.beginDate >= this.filterTab[4]
  }

  checkEndDate(data){
    if(this.filterTab[5] == '') return true
    return data.endDate <= this.filterTab[5]
  }


  updateFilterTab(filtertab){
    // console.log(filtertab)
    this.filterTab = filtertab;
    this.trips = this.unfilteredTrips.filter(trip=> this.lolo(trip))
  }

  

}
