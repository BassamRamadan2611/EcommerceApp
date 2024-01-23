import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  term: any
  @Input() totalItem:any
  cartProducts:any[]=[]

  constructor(private cartservice:CartService,private auth:AuthService) { }

  ngOnInit(): void {

   
  }


  Logout(){
    this.auth.logout()
  }
}
