import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SteponeReset } from '../modeles/stepone-reset';
import { SteptwoOtp } from '../modeles/steptwo-otp';
import { Stepthreechp } from '../modeles/stepthreechp';

@Injectable({
  providedIn: 'root'
})
export class ForgetpassService {
  
  baseurlemp :string = environment.baseurl +"/users"
  constructor(private http:HttpClient) { }

requestotp(email: SteponeReset):  Observable<SteponeReset> {
  return this.http.post<SteponeReset>(`${this.baseurlemp}/resetrequestpassword`,email);
}
mailotp(otpemail: SteptwoOtp):  Observable<SteptwoOtp> {
  return this.http.post<SteptwoOtp>(`${this.baseurlemp}/verifyOtp`,otpemail);

}
changepass(resetpw: Stepthreechp):  Observable<Stepthreechp> {
  return this.http.post<Stepthreechp>(`${this.baseurlemp}/resetPassword`,resetpw);

}


}

