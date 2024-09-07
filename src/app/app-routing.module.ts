import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestioncomponentComponent } from './pages/gestioncomponent/gestioncomponent.component';
import { CompetencesdtoComponent } from './pages/competencesdto/competencesdto.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { LoginSignupComponent } from './pages/login-signup/login-signup.component';

const routes: Routes = [{path:"dep" , component:GestioncomponentComponent },
  {path:"compp", component:CompetencesdtoComponent},
  {path:"emp", component:EmployeeComponent},
  {path:"",component:LoginSignupComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
