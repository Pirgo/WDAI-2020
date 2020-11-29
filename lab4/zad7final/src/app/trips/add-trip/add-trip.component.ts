import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {trips} from '../../trips'
@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  tripForm : FormGroup;
  // trips = trips;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.tripForm = this.formBuilder.group({
      name: ['', Validators.required],
      destination: ['', Validators.required],
      beginDate: ['', Validators.required],
      endDate: ['', Validators.required],
      price: ['', Validators.required],
      maxCapacity: ['', Validators.required],
      description: ['', Validators.required],
      imgURL: ['', Validators.required],
      currentplace: 0
    })
  }
  onSubmit(form){
    console.log(form.value)
    trips.push(form.value)
    console.log(trips);
  }

}
