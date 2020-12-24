import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Trip } from 'src/app/classes/trip';
import { TripServiceService } from 'src/app/services/trip-service.service';

@Component({
  selector: 'app-trip-add',
  templateUrl: './trip-add.component.html',
  styleUrls: ['./trip-add.component.css']
})
export class TripAddComponent implements OnInit {

  tripForm : FormGroup;
  dateSent = new Date;
  dateSent2 = new Date;
  constructor(private formBuilder : FormBuilder, private tripService: TripServiceService) { }

  ngOnInit(): void {
    
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      destination: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      price: ['', Validators.required],
      maxCapacity: ['', [Validators.required, Validators.min(1)]],
      description: ['', Validators.required],
      imgURL: ['', Validators.required],
    })
    this.tripForm.markAsUntouched();
  }

  onSubmit(){
    let trip = new Trip()
    trip.name = this.tripForm.value.name;
    trip.destination = this.tripForm.value.destination;
    trip.beginDate = this.tripForm.value.beginDate;
    trip.endDate = this.tripForm.value.endDate;
    trip.price = this.tripForm.value.price;
    trip.maxCapacity = this.tripForm.value.maxCapacity;
    trip.description = this.tripForm.value.description;
    trip.imgURL = this.tripForm.value.imgURL;
    this.tripService.createTrip(trip)
    this.tripForm.reset();
  }

  dateBeginChange(e: any) {
    this.dateSent2 = e.target.value;
  }

}
