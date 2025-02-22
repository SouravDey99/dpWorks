import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // make a root route named home
  { path: 'home', component: HomeComponent },
  // Add more modules here...
  // Add more routes here...
  { path: '**', redirectTo: 'login' } // Redirect to login page if no valid route is found
];;
