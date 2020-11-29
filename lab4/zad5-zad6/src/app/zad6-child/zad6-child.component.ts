import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zad6-child',
  templateUrl: './zad6-child.component.html',
  styleUrls: ['./zad6-child.component.css']
})
export class Zad6ChildComponent implements OnInit {

  @Input() block: boolean; 
  @Output() counter = new EventEmitter();
  cnt:number = 0;

  add(){
    this.cnt++;
    this.counter.emit(this.cnt);
  }

  reset(){
    this.cnt = 0;
    this.counter.emit(this.cnt);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
