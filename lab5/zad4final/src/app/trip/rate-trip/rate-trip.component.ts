import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate-trip',
  templateUrl: './rate-trip.component.html',
  styleUrls: ['./rate-trip.component.css']
})
export class RateTripComponent implements OnInit {

  @Output() currentRateChange = new EventEmitter();
  @Input() currentRate;

  constructor() { }

  ngOnInit(): void {
  }

  updateRaiting(starCnt){
    this.currentRateChange.emit(starCnt);
  }

}
