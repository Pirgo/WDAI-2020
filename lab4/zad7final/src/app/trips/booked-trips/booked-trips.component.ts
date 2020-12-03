import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booked-trips',
  templateUrl: './booked-trips.component.html',
  styleUrls: ['./booked-trips.component.css']
})
export class BookedTripsComponent implements OnInit {
  @Input() counter: number;
  constructor() { }
  ngOnInit(): void {
  }

  setBackground(){
    let myStyles = {
      'background' : '#dc3545',
    }
    if (this.counter > 10){
      myStyles = {'background' : '#28a745'}
    }
    return myStyles;
  }
}
