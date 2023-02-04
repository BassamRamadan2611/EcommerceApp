import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Output, EventEmitter } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {
  
  products:any[]=[]
  categories:any[]=[]
  loading:boolean=false;
  cartProducts:any[]=[]


  term: any;
  @Output() totalItem:any = new EventEmitter<any>();


  constructor( private service:ProductsService) { }
  

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
      
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))

        alert("Your Product ia added to Your Carts You can Check it ")
      
        }
       }
       else{
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts))

      alert("Your Product ia added to Your Carts You can Check it ")
       }
      
      
    

}

}
