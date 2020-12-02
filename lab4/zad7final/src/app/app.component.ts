import { Component } from '@angular/core';
import { CartElement } from './cart/cart.component';
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
  cart: CartElement[] = [];
  cartSum: number = 0;
  filterTab: (string | number | any[]) = [[], -1, -1, [], '', ''];


  updateFilterTab(event){
    this.filterTab = event
  }


  updatebookedTrips(event: number){
    this.bookedTrips += event;
  }

  addToCart(trip){
    this.cartSum += trip.price;
    let flag = false;
    for(let c of this.cart){
      if(trip.name == c.name){
        c.counter += 1;
        flag = true
      }
    }
    if(!flag){
      this.cart.push({
        name: trip.name,
        price: trip.price,
        counter: 1
      })
    }
  }

  rmvFromCart(trip){
    this.cartSum -= trip.price
    for(let c in this.cart){
      if(this.cart[c].name == trip.name){
        this.cart[c].counter -= 1
        if(this.cart[c].counter == 0){
          this.cart.splice(parseInt(c),1)
        }
      }
    }
  }

  deleteFromCart(array){
    this.cartSum -= (array[0].price * array[1])
    for(let c in this.cart){
      if(array[0].name == this.cart[c].name){
        this.cart.splice(parseInt(c), 1)
      }
    }
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

  filterByDest(destinations){
    let res = [];
    for(let dest of destinations){
      for(let trip of trips){
        if(trip.destination == dest){
          res.push(trip)
        }
      }
    }
    return res;
  }

  filterByRaiting(remainingtrips, raitings){
    let res = [];
    for(let raiting of raitings){
      for(let trip of remainingtrips){
        if(trip.raiting == raiting){
          res.push(trip);
        }
      }
    }

    return res;
  }

  gettrips(){
    if(this.filterTab[0].length != 0){
      this.trips =  this.filterByDest(this.filterTab[0])
    }
    else{
      this.trips = trips;
    }

    if(this.filterTab[1] > 0){
      this.trips = this.trips.filter(trip=>{
          return trip.price >= this.filterTab[1]
        })
    }

    if(this.filterTab[2] > 0){
      console.log(this.trips)
      this.trips = this.trips.filter(trip=>{
        return trip.price <= this.filterTab[2]
      })
      console.log('lld')
    }

    if(this.filterTab[3].length != 0){
      this.trips = this.filterByRaiting(this.trips, this.filterTab[3])
    }

    if(this.filterTab[4] != ''){
      this.trips = this.trips.filter(trip=>{
        return trip.beginDate >= this.filterTab[4]
      })
    }

    if(this.filterTab[5] != ''){
      this.trips = this.trips.filter(trip=>{
        return trip.endDate <= this.filterTab[5]
      })
    }
    // this.trips = trips.filter(trip => {
    //   return trip.destination.includes()
    // })
    // this.trips = trips.filter(trip=>{
    //   return trip.destination.includes(what);
    // })
    return this.trips;
  }
}
