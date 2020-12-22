import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TripsListComponent } from './trip/trips-list/trips-list.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { RateTripComponent } from './trip/rate-trip/rate-trip.component';
import { FiltrTripsComponent } from './trip/filtr-trips/filtr-trips.component';
import { TrpiMoreDetailsComponent } from './trip/trpi-more-details/trpi-more-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsListComponent,
    TripDetailsComponent,
    AddTripComponent,
    NavbarComponent,
    CartComponent,
    RateTripComponent,
    FiltrTripsComponent,
    TrpiMoreDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig ),
    AngularFirestoreModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
