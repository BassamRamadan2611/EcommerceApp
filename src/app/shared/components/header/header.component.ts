import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  totalItem:number=0
allcartProducts:any[]= []

constructor( private service:SharedServiceService){}

  ngOnInit():void{

   this.allcartProducts = JSON.parse(localStorage.getItem("cart")!)

   console.log(this.allcartProducts)
    this.totalItem += this.allcartProducts.length 
  }

}
