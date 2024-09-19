import { Component } from '@angular/core';
import { Stepthreechp } from '../../modeles/stepthreechp';
import { ForgetpassService } from '../../services/forgetpass.service';

@Component({
  selector: 'app-resetpw',
  templateUrl: './resetpw.component.html',
  styleUrl: './resetpw.component.css'
})
export class ResetpwComponent {
  stepthree:Stepthreechp = new Stepthreechp();
  

  constructor(private servpass:ForgetpassService) { }
  ngOnInit(): void {
  }
  
changepass() {
  console.log(this.stepthree,"bbbbbb")
    this.servpass.changepass(this.stepthree).subscribe({

      next: (data) => {
        console.log(data ,);
   
      },
      error: console.log,
    });
  }

}
