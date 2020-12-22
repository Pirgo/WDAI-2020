import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from '../classes/trip';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  private dbPath = 'trips'

  tripsRef: AngularFireList<Trip>;
  items: Observable<any[]>
  trips


  constructor(private db: AngularFireDatabase) {
    this.tripsRef = db.list(this.dbPath)
    this.items = this.tripsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.trips = this.tripsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(trip => this.trips = trip)
  }

  createTrip(trip: Trip): void {
    console.log(trip)
    this.tripsRef.push({...trip})
  }

  updateTrip(key: string, value: any) {
    this.tripsRef.update(key, value)
  }

  deleteTrip(key: string) {
    this.tripsRef.remove(key)
  }

  getTripsList()  {
    return this.items;
  }

   deleteAll() {
     this.tripsRef.remove()
   }
    
}
