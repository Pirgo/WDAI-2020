import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate-trips',
  templateUrl: './rate-trips.component.html',
  styleUrls: ['./rate-trips.component.css']
})
export class RateTripsComponent implements OnInit {
  @Output() currentRateChange = new EventEmitter();
  @Input() currentRate;

  constructor() { }

  ngOnInit(): void {
  }

  updateRaiting(starCnt){
    this.currentRateChange.emit(starCnt);
  }
}
