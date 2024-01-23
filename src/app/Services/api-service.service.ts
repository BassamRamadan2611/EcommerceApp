import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService  implements OnInit{

 

  constructor(private http:HttpClient ) { }
  

ngOnInit(){
 this.getProducts();
 console.log(this.getProducts)
}

getProducts():Observable<any>{

  return this.http.get<any>("https://fakestoreapi.com/products/")
}
}
