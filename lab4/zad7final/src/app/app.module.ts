import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripComponent } from './trips/trip/trip.component';
import { BookedTripsComponent } from './trips/booked-trips/booked-trips.component';
import { AddTripComponent } from './trips/add-trip/add-trip.component';
import { RateTripsComponent } from './trips/rate-trips/rate-trips.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FiltrTripsComponent } from './trips/filtr-trips/filtr-trips.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    TripComponent,
    BookedTripsComponent,
    AddTripComponent,
    RateTripsComponent,
    FiltrTripsComponent,
    CartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
