import { Component } from "@angular/core";
import { UserService } from "../../services/userService"
import { User } from "../../model/User"
import { Router } from "@angular/router";

@Component({
  selector: "dashboard",
  templateUrl: "",
  styleUrls: ["components/userDashboardCmpt/userDashboard.css"],
  providers: []
})
export class UserDashboardComponent {
  // Your TypeScript logic goes here
  private email: string = "";
  private isLoggingIn = true;
  user: User
  constructor(private router: Router, public userService: UserService) {
    console.log("inside Login")
    
  }

  signUp() {
    
  }
  toggleDisplay() {
   
  }
}
