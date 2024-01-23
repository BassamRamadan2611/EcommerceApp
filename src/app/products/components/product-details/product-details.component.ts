import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any
  data:any={}
  loading:boolean=false;
  constructor(private route:ActivatedRoute,private service:ProductService){
this.id = this.route.snapshot.paramMap.get("id")
console.log(this.id)

  }

  ngOnInit():void{
    this.getProduct();

  }
  getProduct(){
    this.loading=true
    this.service.getProductById(this.id).subscribe((res:any)=>{
this.data=res
this.loading=false
    },
    error=>{alert(error.message)
      this.loading=false}
    )

  }

}
