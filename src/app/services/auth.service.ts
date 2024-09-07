import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';
import { AuthenticationResponse } from '../modeles/authentication-response';
import { RegisterRequest } from '../modeles/register-request';
import { Directeur } from '../modeles/directeur';
import { AuthenticationRequest } from '../modeles/authentication-request';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router,private httpClient: HttpClient) { }
  private baseUrl=environment.baseurl+"/auth"
  
  isUserAuthenticated():boolean{
    if (localStorage.getItem ("accesstoken")){
      return true;
    }
    this.router.navigate(["/signin"])
return false;
  }
  login(authenticationRequest : AuthenticationRequest):Observable<AuthenticationResponse>{
    const url=this.baseUrl+"/authenticate"
    return this.httpClient.post<AuthenticationResponse>(url,authenticationRequest)
  }
  register(directeur: Directeur):Observable<Response>{
    const url=this.baseUrl+"/register"
    return this.httpClient.post<Response>(url,directeur)
  }
  getRole = () => {
    var user: any;
    user = localStorage.getItem('accesstoken');
    let token = JSON.parse(user).token;
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken.authorities[0].authority;
  }
  setUserToken (authenticationResponse: AuthenticationResponse){
    localStorage.setItem("accessToken",JSON.stringify(authenticationResponse))
  const token = authenticationResponse.accessToken;
  if (token) {
  const decodedToken = jwtDecode(token) as any;
  const fullname = decodedToken.fullname;
  localStorage.setItem("fullname", fullname);
  const userId = decodedToken.userId;
  localStorage.setItem("userId", userId);
  const role = decodedToken.role;
  localStorage.setItem("role", role);


  console.log("uuuuuuuuuuuuuuuuuuuuuuuuuu")
  console.log("HHHHHHHHH",decodedToken)
    }
  }

}