import { Component, OnDestroy, OnInit } from '@angular/core';
import { Trip } from 'src/app/classes/trip';
import { TripServiceService } from 'src/app/services/trip-service.service';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit, OnDestroy {


  trips: Trip[]
  tripsFiltered: Trip[]
  tripsSubscriber:any
  tripsFilteredSubscriber
  filterTab: (string | number | any[]) = [[], -1, -1, [], '', ''];

  constructor(private tripService: TripServiceService) { }

  ngOnInit(): void {
    this.tripsSubscriber = this.tripService.getTripsList().subscribe(trips => 
      this.trips = trips
      )
    this.tripsFilteredSubscriber=this.tripService.getTripsList().subscribe(trips =>
      this.tripsFiltered = trips.filter(trip=>this.filtrTrips(trip)))
    
    
  }

  applyFilter(){
    this.tripsFiltered = this.trips.filter(trip=>this.filtrTrips(trip))
  }

  filtrTrips(data){
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
    console.log(filtertab)
    this.filterTab = filtertab;
    this.applyFilter();
  }

  ngOnDestroy(){
    console.log("usuwanie subskrybcji")
    this.tripsSubscriber.unsubscribe()
    this.tripsFilteredSubscriber.unsubscribe()
  }

}
