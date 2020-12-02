import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from "@angular/forms";
import {trips} from '../../trips'
@Component({
  selector: 'app-add-trip',
  templateUrl: './add-trip.component.html',
  styleUrls: ['./add-trip.component.css']
})
export class AddTripComponent implements OnInit {
  tripForm : FormGroup;
  dateSent = new Date;
  dateSent2 = new Date;
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
      raiting: 1,
      places: 0
      
    })
    this.tripForm.markAsUntouched();
  }

  onSubmit(form){
    trips.push(form.value)
    this.tripForm.reset();
    console.log(trips);
  }

  dateBeginChange(e: any) {
    this.dateSent2 = e.target.value;
  }

  
  
  
}

