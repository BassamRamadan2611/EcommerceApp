import { throwDialogContentAlreadyAttachedError } from '@angular/cdk/dialog';
import { Component, Input } from '@angular/core';
import { Observable } from '@firebase/util';
import { ApiServiceService } from 'src/app/Services/api-service.service';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {


  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  cartProducts:any[]=[]
  totalItem:number=0
  term: any;


  constructor( private service:ProductService) { }
  

  ngOnInit(): void {
  

   this.AllProducts()
   this.AllCategories()
    
  }
  AllProducts(){
    this.loading=true
    this.service.getAllProducts().subscribe((res:any)=>{
      this.products =res;
      this.loading=false
    } ,(error:any)=>{
      this.loading=false
      alert(error.message)
    })
  }

  AllCategories(){
    this.loading=true
    this.service.getAllCategories().subscribe((res:any)=>{
      this.categories =res;
      this.loading=false
    } ,(error:any)=>{
      this.loading=false
      alert(error.message)
    })
  }

  filterCategory(event:any){

    let value = event.target.value;

    if (value =="all"){
      this.AllProducts();
    }
    else{
    this.getProdcuctsCategory(value)
    }

  }

  getProdcuctsCategory(keyword:string){
    this.loading=true
    this.service.getProductsByCategory(keyword).subscribe((res:any)=>{
this.products=res
this.loading=false
    },error=>{
      this.loading=false
      alert(error.message)
    })
  }

  addToCart(event:any){
 if ("cart" in localStorage){
  this.cartProducts = JSON.parse(localStorage.getItem("cart")!) 
  let exist = this.cartProducts.find(item =>item.item.id == event.item.id)
  if(exist){
    alert("This Product is already in your cart")
  }else{
    this.cartProducts.push(event);
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

  }
 }
 else{
  this.cartProducts.push(event);
  localStorage.setItem("cart",JSON.stringify(this.cartProducts))

 }
this.totalItem=this.cartProducts.length

   
  }


}
