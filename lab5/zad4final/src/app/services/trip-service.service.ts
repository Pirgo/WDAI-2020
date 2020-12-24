import { Injectable } from '@angular/core';
import { Trip } from '../classes/trip';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripServiceService {

  private dbPath = 'trips'
  
  tripsRef: AngularFireList<Trip>
  items: Observable<Trip[]>

  constructor(private db: AngularFireDatabase) {
    this.tripsRef = db.list(this.dbPath)
    this.items = this.tripsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  createTrip(trip: Trip): void {
    this.tripsRef.push({...trip})
  }

  updateTrip(key: string, value: any) {
    this.tripsRef.update(key, value)
  }

  deleteTrip(key: string){
    this.tripsRef.remove(key)
  }

  getTripsList(){
    return this.items
  }

  getTrip(key:string){
    let tmppath: AngularFireObject<Trip> = this.db.object(this.dbPath + '/'+ key);
    return tmppath.snapshotChanges().pipe(map(changes => ({ key: changes.payload.key, ...changes.payload.val() })
    ))
  }
}
