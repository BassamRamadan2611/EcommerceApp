import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  term: any
  public products:any=[];
  public grandTotal:number =0;
  cartProducts:any[]=[]
 total:any=0
  success:boolean=false;

  
    constructor(private Service:CartsService ) { }
  
    ngOnInit(): void {
      this.getCartProducts()
    }
    getCartProducts(){
      if ("cart" in localStorage){
        this.cartProducts = JSON.parse(localStorage.getItem("cart")!) 
        this.getTotal()
    }
    console.log(this.cartProducts)
  }

  getTotal(){
   
    this.total=0;
    for(let i in this.cartProducts){
      this.total += this.cartProducts[i].item.price * this.cartProducts[i].quantity
    }

  }

  addAmount(index:number){
    this.cartProducts[index].quantity++
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
  minsAmount(index:number){
    this.cartProducts[index].quantity--
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
  detectChanges(){
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts)) 
  }
  deleteProduct(index:number){
   
    this.cartProducts.splice(index,1);
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts)) 
  }
  claerAllCart(){
    this.cartProducts=[];
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartProducts)) 
    
  }

  AddCart(){
  let product = this.cartProducts.map(item=>{
    return {productId:item.item.id,quantity:item.quantity}
  })

  let model ={
    userId:1,
    date:new Date(),
    products :product
  }

  this.Service.createAddCart(model).subscribe(res=>{
this.success=true
  } )

  
  }

  }