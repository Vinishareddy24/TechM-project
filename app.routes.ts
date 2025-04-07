import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddmealComponent } from './addmeal/addmeal.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'addmeal', component: AddmealComponent },
  { path: '', component: DashboardComponent },
  { path: 'addmeal', component: AddmealComponent },
];
