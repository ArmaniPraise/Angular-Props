import { Component } from '@angular/core';
import { Products } from '../product/product';
import { DataService } from 'src/app/sevices/data.service';

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent {
  products:Products[] = [];

  toggled:boolean = false;


  constructor(private dataService:DataService){}

  ngOnInit():void{
    this.getProduct()
  };

  getProduct(){
    this.dataService.getProduct().subscribe({
      next:(res)=>{
        this.products = res;
        console.log(this.products);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  toggleColor(id:any){
    this.toggled = !this.toggled;

   this.toToggle = id;
   this.selectedProduct = id;
  }
}
