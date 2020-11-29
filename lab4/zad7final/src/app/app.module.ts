import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trips/trip/trip.component';
import { BookedTripsComponent } from './trips/booked-trips/booked-trips.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';


@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    BookedTripsComponent,
    AddTripComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
