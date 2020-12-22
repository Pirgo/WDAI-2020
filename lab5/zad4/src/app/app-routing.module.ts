import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { AddTripComponent } from './trip/add-trip/add-trip.component';
import { TripsListComponent } from './trip/trips-list/trips-list.component';
import { TrpiMoreDetailsComponent } from './trip/trpi-more-details/trpi-more-details.component';

const routes: Routes = [
  {path : '', component: TripsListComponent},
  {path: 'addtrip', component: AddTripComponent},
  {path: 'cart', component: CartComponent},
  {path: ':key', component: TrpiMoreDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
