import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zad6-parent',
  templateUrl: './zad6-parent.component.html',
  styleUrls: ['./zad6-parent.component.css']
})
export class Zad6ParentComponent implements OnInit {

  isDisabled: boolean = false;
  cnt:number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  deactivateButton(clicks: number){
    this.cnt = clicks;
    if(clicks < 10){
      this.isDisabled = false;
    }
    else{
      this.isDisabled = true;
    }
    console.log(this.isDisabled)
  }

}
