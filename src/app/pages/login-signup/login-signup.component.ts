import { Component, OnInit } from '@angular/core';
import { Directeur } from '../../modeles/directeur';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationRequest } from '../../modeles/authentication-request';

@Component({
  selector: 'app-login-signup',
  templateUrl: 'login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent implements OnInit
{
  authRequest:AuthenticationRequest =new AuthenticationRequest();
registerRequest:Directeur=new Directeur();
  errorMsg!: string;
constructor(private authService : AuthService, private router: Router){
}
  ngOnInit(): void {
  
  }
  register(){
    console.log(this.registerRequest)
    this.authService.register(this.registerRequest)
    .subscribe(result=>{
    //  this.router.navigate(["/"])
   
  
      console.log(result)
   
    },
    (err:HttpErrorResponse)=>this.errorMsg='this email is existe')
  }

  Login(){
    console.log(this.authRequest,"ghayth")
    this.authService.login(this.authRequest).subscribe(
      ress =>{
        this.authService.setUserToken(ress);
        console.log("HELL", ress);
        alert("ahlaa")
       
        const IDD=localStorage.getItem("userId");
        const name = localStorage.getItem("fullname");
        const userId = localStorage.getItem("userId");
        this.router.navigate(["/dep"]);
        console.log("userId", userId);
      /* if (role=="VENDEUR")
        {
        this.router.navigate(['/vendeur']);
      }


      if (role=="ADMIN")
        {
        this.router.navigate(['/admin']);
      }
      if (role=="LIVREUR")
        {
        this.router.navigate(['/livreur']);
      }


      if (role=="CLIENT")


        this.router.navigate(['/acheteur']);*/
      },








      error =>{
        this.errorMsg= "login ou mot de pass incorect";
      }
    );
  
  }





fullname!: string;
email!: string;
password!: string;
loginEmail!: string;
loginPassword!: string;
direction!: string;

}
