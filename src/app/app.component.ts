import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  cartProducts: any[]=[];
  total: any;

  ngOnInit():void{
    this.getTotal()
  }
  getTotal(){
    this.cartProducts=JSON.parse(localStorage.getItem("cart")!)
    this.total = this.cartProducts.length
      }
}
