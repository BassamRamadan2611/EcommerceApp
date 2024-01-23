import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 
    

  }

  getAllProducts():Observable<any>{
    return this.http.get(environment.baseApi + "products")
  }
  getAllCategories():Observable<any>{
    return this.http.get(environment.baseApi+"products/categories")
  }

  getProductsByCategory(keyword:string):Observable<any>{
    return this.http.get(environment.baseApi+"products/category/"+keyword)
  }
  getProductById(id:any):Observable<any>{
    return this.http.get(environment.baseApi+"products/"+id)

  }
}
