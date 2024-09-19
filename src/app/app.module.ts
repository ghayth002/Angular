import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GestioncomponentComponent } from './pages/gestioncomponent/gestioncomponent.component';
import { ModalComponent } from './modal/modal.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PopupModule } from "@progress/kendo-angular-popup";
import { CompetencesdtoComponent } from './pages/competencesdto/competencesdto.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';
import { AuthIntercepterService } from './services/auth-intercepter-service.service';
import { ForgetpassComponent } from './pages/forgetpass/forgetpass.component';
import { VerifyotpComponent } from './pages/verifyotp/verifyotp.component';
import { ResetpwComponent } from './pages/resetpw/resetpw.component';


@NgModule({
  declarations: [
    AppComponent,
    GestioncomponentComponent,
    ModalComponent,
    CompetencesdtoComponent,
    EmployeeComponent,
    LoginSignupComponent,
    ForgetpassComponent,
    VerifyotpComponent,
    ResetpwComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PopupModule,
    BrowserAnimationsModule,
    FormsModule,
    MultiSelectModule
  
    // RouterModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:AuthIntercepterService,
    multi: true
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
