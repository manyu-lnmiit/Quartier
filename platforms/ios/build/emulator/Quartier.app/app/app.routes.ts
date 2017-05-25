import { LoginComponent } from "./components/loginCmpt";
import { HomeComponent } from "./components/homeCmpt";
import { Routes } from '@angular/router';

export const routes:Routes = [
    { path: "", component: LoginComponent },
    { path: "home", component: HomeComponent }
];

export const navigatableComponents = [
  LoginComponent,
  HomeComponent
];