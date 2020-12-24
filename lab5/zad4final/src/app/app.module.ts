import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { TripBannerComponent } from './trip/trip-banner/trip-banner.component';
import { TripAddComponent } from './trip/trip-add/trip-add.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RateTripComponent } from './trip/rate-trip/rate-trip.component';
import { FiltrTripComponent } from './trip/filtr-trip/filtr-trip.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    TripListComponent,
    TripDetailsComponent,
    TripBannerComponent,
    TripAddComponent,
    RateTripComponent,
    FiltrTripComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
