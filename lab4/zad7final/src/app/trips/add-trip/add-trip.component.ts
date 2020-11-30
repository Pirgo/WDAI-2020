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
  // trips = trips;
  begindate: string
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
      imgURL: ['', Validators.required]
      
    })
    this.tripForm.markAsUntouched();
  }

  getBeginDateAndValid(form){
    let begin = form.get('beginDate').value
    let end = form.get('endDate').value
    if((end != '' || end != null) && (begin != '' || begin !=null)){
      return !form.valid || !(begin < end)
    }
    return !form.valid
    
    
  }
  onSubmit(form){
    trips.push(form.value)
    this.tripForm.reset();
    console.log(trips);
  }

  
  
  
}

