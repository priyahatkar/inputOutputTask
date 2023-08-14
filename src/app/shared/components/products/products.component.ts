import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Iproduct } from '../../models/product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Output() getProductAndCatLog : EventEmitter<Iproduct> = new EventEmitter<Iproduct>();
  @ViewChild('ProdName') PName !: ElementRef;
  @ViewChild('ProdDescrption') PDescrption !: ElementRef;
  // public productArray !: Iproduct;
  constructor() { }

  ngOnInit(): void {
    
  }
  onAddProd(){
      let prod : Iproduct ={
        prodName: this.PName.nativeElement.value,
        prodDescription: this.PDescrption.nativeElement.value,
        prodCatg: 'product' 
      }
      console.log(prod)
      this.getProductAndCatLog.emit(prod);
      // localStorage.setItem("addObj", JSON.stringify(this.productArray))
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'New Product has been Added',
      })
      this.PName.nativeElement.value = '';
      this.PDescrption.nativeElement.value=''
  }


  onAddCatlog(){
    let cat : Iproduct={
      prodName: this.PName.nativeElement.value,
        prodDescription: this.PDescrption.nativeElement.value,
        prodCatg: 'catlog'
    }
    console.log(cat)
    this.getProductAndCatLog.emit(cat)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'New Catlog has been Added',
    })
    this.PName.nativeElement.value = '';
    this.PDescrption.nativeElement.value= ''
  }
}
