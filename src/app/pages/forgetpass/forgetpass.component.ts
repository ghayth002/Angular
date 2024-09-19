import { Component } from '@angular/core';
import { ForgetpassService } from '../../services/forgetpass.service';
import { SteponeReset } from '../../modeles/stepone-reset';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrl: './forgetpass.component.css'
})

export class ForgetpassComponent {
  
  stepone:SteponeReset = new SteponeReset();
  

  constructor(private servpass:ForgetpassService) { }
  ngOnInit(): void {
  }
  
  emailforgetpass() {

    this.servpass.requestotp(this.stepone).subscribe({

      next: (data) => {
        console.log(data ,);
   
      },
      error: console.log,
    });
  }

}
