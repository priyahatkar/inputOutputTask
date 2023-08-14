import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from './shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inputOutputTask';
  @Input() productArray : Array<Iproduct> = [];
    

  constructor() { }

  ngOnInit(): void {
    let data = localStorage.getItem('addObj')
    if(data != null){
        this.productArray = JSON.parse(data)
    }
  }


  getAddProduct(prod :Iproduct){
    this.productArray.push(prod)
    localStorage.setItem("addObj", JSON.stringify(this.productArray))
  }
}
