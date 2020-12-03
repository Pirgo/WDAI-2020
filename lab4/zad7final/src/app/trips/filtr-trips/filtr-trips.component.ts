import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { trips } from '../../trips'
@Component({
  selector: 'app-filtr-trips',
  templateUrl: './filtr-trips.component.html',
  styleUrls: ['./filtr-trips.component.css']
})
export class FiltrTripsComponent implements OnInit {
  trips = trips;



  destinationFilter = [];
  priceFilterMax: number =0;
  priceFilterMin: number =0;
  raitingFilter = [];
  dateFilterBegin: string ='';
  dateFilterEnd: string = '';
  filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
  @Output() filterTabEmit = new EventEmitter()

  minPrice: number
  maxPrice: number
  dateSent;
  dateSent2;
  constructor() { }

  setPriceRange(){
    let min = trips[0].price
    let max = trips[0].price
    for(let trip of trips){
      if(min > trip.price){
        min = trip.price
      }
      if(max < trip.price){
        max = trip.price
      }
    }

    this.minPrice = min;
    this.maxPrice = max;
    this.priceFilterMin = min;
    this.priceFilterMax = max;
  }

  ngOnInit(): void {
    this.dateSent = new Date;
    this.dateSent2 = new Date;
    this.setPriceRange();
  }

  updateMinMax(){
    let min:number = 999999
    let max:number = 0
    for(let trip of trips){
      if(min > trip.price){
        min = trip.price
      }
      if(max < trip.price){
        max = trip.price
      }
    }
    if(this.minPrice < min){
      this.priceFilterMin = min
    }
    if(this.maxPrice > max){
      this.priceFilterMax = max
    }
    if(min == 999999 && max == 0){
      return
    }
    this.minPrice = min
    this.maxPrice = max
    
    
  }


  getDestinations(){
    let res = [];
    for(let trip of this.trips){
      if(!res.includes(trip.destination)) res.push(trip.destination)
    }
    this.updateMinMax()
    return res;
  }


  addDestination(event){
    if(event.target.checked){
      this.destinationFilter.push(event.target.value)
      console.log(this.destinationFilter)
    }
    else{
      console.log('d')
      this.destinationFilter = this.destinationFilter.filter(filt => {
        return filt != event.target.value
      })
    }
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)

  }


  updateMinPrice(event){
    this.priceFilterMin = parseInt(event.target.value)
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)
  }

  updateMaxPrice(event){
    this.priceFilterMax = parseInt(event.target.value)
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)
    // console.log(this.priceFilterMax)
  }

  addRaiting(event){
    if(event.target.checked){
      this.raitingFilter.push(event.target.parentNode.innerText.length)
    }
    else{
      this.raitingFilter = this.raitingFilter.filter(filt => {
        return filt != event.target.parentNode.innerText.length
      })
    }
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)
    // console.log(this.raitingFilter)
  }


  beginDateChange(event){
    this.dateFilterBegin = event.target.value
    this.dateSent2 = event.target.value
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)
  }

  endDateChange(event){
    this.dateFilterEnd = event.target.value
    this.filterTab = [this.destinationFilter, this.priceFilterMin, this.priceFilterMax, this.raitingFilter, this.dateFilterBegin, this.dateFilterEnd]
    this.filterTabEmit.emit(this.filterTab)
  }
}
