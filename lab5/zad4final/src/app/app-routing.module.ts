import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { TripAddComponent } from './trip/trip-add/trip-add.component';
import { TripDetailsComponent } from './trip/trip-details/trip-details.component';
import { TripListComponent } from './trip/trip-list/trip-list.component';

const routes: Routes = [
  {path : '', component: TripListComponent},
  {path: 'addtrip', component: TripAddComponent},
  {path: 'cart', component: CartComponent},
  {path: 'trip/:key', component: TripDetailsComponent},
  {path: '**', component: TripListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
