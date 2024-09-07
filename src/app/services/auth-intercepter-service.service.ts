import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../modeles/authentication-response';

@Injectable({
  providedIn: 'root'
})
export class AuthIntercepterService implements HttpInterceptor {

  

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
   
  let authenticationResponse : AuthenticationResponse ={
    accessToken: '',
    refreshToken: ''
  };
  if(localStorage.getItem("accessToken")){
    authenticationResponse= JSON.parse(localStorage.getItem("accessToken") as string )
   
 req=req.clone({
  headers:new  HttpHeaders({
   
    Authorization:"Bearer "+authenticationResponse.accessToken
    
  })

})
console.log(authenticationResponse.accessToken,"rrrrrrr")
  }
  console.log(req, "ghghghhghgh") ;
return next.handle(req)

  }
}


