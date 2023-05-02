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

  selectedProduct:any = {};

  toToggle:any;

  loading:boolean = true;


  constructor(private dataService:DataService){}

  ngOnInit():void{
    this.getProduct()
  };

  getProduct(){
    this.dataService.getProduct().subscribe({
      next:(res)=>{
        this.products = res;
        console.log(this.products);
        this.loading = false;
      },
      error:(err)=>{
        console.log(err);
        this.loading = false;
      }
    })
  }

  toggleColor(id:any){
    this.toggled = !this.toggled;

   this.toToggle = id;
   this.selectedProduct = id;
  }
}
