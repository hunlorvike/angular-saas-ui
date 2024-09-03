import { Routes } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';

export const routes: Routes = [
    { path: 'sign-in', component: SigninComponent },
    { path: 'sign-up', component: SignupComponent },
];
