import { Component } from '@angular/core';
import { SteptwoOtp } from '../../modeles/steptwo-otp';
import { ForgetpassService } from '../../services/forgetpass.service';

@Component({
  selector: 'app-verifyotp',
  templateUrl: './verifyotp.component.html',
  styleUrl: './verifyotp.component.css'
})
export class VerifyotpComponent {
  steptwo:SteptwoOtp = new SteptwoOtp();
  

  constructor(private servpass:ForgetpassService) { }
  ngOnInit(): void {
  }
  
verifyotp() {
  console.log(this.steptwo ,"aaaaa")
    this.servpass.mailotp(this.steptwo).subscribe({

      next: (data) => {
        console.log(data ,);
   
      },
      error: console.log,
    });
  }

}
