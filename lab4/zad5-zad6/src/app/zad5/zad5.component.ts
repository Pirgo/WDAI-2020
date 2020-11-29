import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


import { cars } from './cars';


@Component({
  selector: 'app-zad5',
  templateUrl: './zad5.component.html',
  styleUrls: ['./zad5.component.css']
})


export class Zad5Component implements OnInit {


  
  cars = cars;
  tmp;

  constructor() { 
    this.tmp = this.adaptData();
  }

  ngOnInit(): void {
  }

  change(event){
    if(event.target.checked){
      event.target.parentNode.parentNode.childNodes[1].style.display = "block";
    }
    else{
      event.target.parentNode.parentNode.childNodes[1].style.display = "none";
    }
  }
  
  adaptData(){
    let resArray: Array<{ brand: string, model: Array<string> , color: Array<Array<string>>}> = []
    for(let car of this.cars){
      if(resArray.length == 0){
        resArray.push({brand: car.brand,
          model:[car.model],
          color:[car.colors]})
          console.log(resArray);
      }
      else{
        for(let i=0; i < resArray.length; i++){
          if(resArray[i].brand == car.brand){
            resArray[i].model.push(car.model);
            resArray[i].color.push(car.colors);
            break;
          }
          else if(i == resArray.length - 1){
            resArray.push({brand: car.brand,
              model:[car.model],
              color:[car.colors]})
              console.log(resArray);
              break;
          }
      }
    }
      
    }
    return resArray;
    
  }



}
