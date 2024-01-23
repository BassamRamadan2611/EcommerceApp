import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ApiServiceService } from './api-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private api:ApiServiceService) { }

  public cartItemList:any =[];
  public productList  = new BehaviorSubject<any>([]);





  setProduct(product:any){
    this.cartItemList.push(...product);

    this.productList.next(product);
    localStorage.setItem("dataStorage",JSON.stringify(this.productList))
  

  }

  addToCart(product:any){

this.cartItemList.push(product);

this.productList.next(this.cartItemList);
localStorage.setItem("dataStorage",JSON.stringify(this.productList))
this.getTotalPrice();


 
  }


 

  getTotalPrice(): number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{

      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
    localStorage.setItem("dataStorage",JSON.stringify(this.productList))
    


  }
  removeAllCart(){
    this.cartItemList=[];
        this.productList.next(this.cartItemList);
        localStorage.setItem("dataStorage",JSON.stringify(this.productList))


  }


  getProducts(){

    return this.productList;

}
}
