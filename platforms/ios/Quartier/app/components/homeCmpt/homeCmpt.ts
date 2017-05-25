import { Component } from "@angular/core";
import { UserService } from "../../services/userService"
import { User } from "../../model/User"
import { Router } from "@angular/router";

@Component({
  selector: "login-app",
  templateUrl: "components/homeCmpt/homeCmpt.html",
  styleUrls: ["components/homeCmpt/homeCmpt.css"],
  providers:[UserService,User] 
})
export class HomeComponent {
  // Your TypeScript logic goes here
 
  constructor(private router: Router,public userService: UserService){
    console.log("inside Home Cmpt");
  }
  
}
