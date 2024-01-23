import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
@Input() data:any={}
@Output() item = new EventEmitter() 
ammount:number=0
addBtn:boolean=false

  add(){

    this.item.emit({ item:this.data,quantity:this.ammount})

  }
}
