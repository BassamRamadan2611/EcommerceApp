import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

import{GoogleAuthProvider, user} from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private fireAuth: AngularFireAuth, private router:Router) { }


  //login method
  login(email:string,password:string){
    this.fireAuth.signInWithEmailAndPassword(email,password).then((res:any)=>{
      localStorage.setItem("token","true");

  this.router.navigate(['/products'])


    },err=>{
alert("something went wrong");
this.router.navigate(['/login'])
    })
  }


  //register
  register(email:string,password:string){
this.fireAuth.createUserWithEmailAndPassword(email,password).then(res=>{
  alert("Registration successfull")
  this.router.navigate(['/login']);
  this.sendEmailForVerivication(res.user)
},err=>{
  alert(err.message);
  this.router.navigate(['/register']);

})
  }


  //logout
  logout(){
    this.fireAuth.signOut().then(()=>{
      localStorage.removeItem("token");
      this.router.navigate(['/login'])
    },err=>{
      alert(err.message)
    })
  }

  //forgot password
  forgotPasssword(email:string){
    this.fireAuth.sendPasswordResetEmail(email).then(( )=>{
      
   this.router.navigate(['/varify-email'])

    },err=>{
      alert("something went worng")
    })
  }
  //verify email
  sendEmailForVerivication(user:any){
    user.sendEmailVerivication().then((res:any)=>{
      this.router.navigate(['/varify-email'])
    },(err:any)=>{
      alert ("something went wrong . not able to sent mail to the registered email")
    })
  }

  // sign in wuth google

  googleSignIn(){
    this.fireAuth.signInWithPopup(new GoogleAuthProvider).then((res:any)=>{
      this.router.navigate(['/products'])
      if(res.user.uid){
        localStorage.setItem("token",JSON.stringify(res.user.uid))
      }
      else{
        alert("something went wrong ")
      }
  
      
    },err=>{
      alert(err.message)
    })
  }
}
