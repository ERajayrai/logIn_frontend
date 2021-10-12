import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/survices/auth.guard';
import { HomepageComponent } from './modules/homepage/homepage/homepage.component';
import { LoginComponent } from './modules/login/login/login.component';
import { SignupComponent } from './modules/signup/signup/signup.component';

const routes: Routes = [
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'homepage',component:HomepageComponent
  },
  {
    path:'',component:LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }