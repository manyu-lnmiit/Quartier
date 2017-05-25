import { Component, Input } from "@angular/core";
import { UserService } from "../../services/userService"
import { User } from "../../model/User"
import { Router } from "@angular/router";

@Component({
  selector: "login-app",
  templateUrl: "components/loginCmpt/loginCmpt.html",
  styleUrls: ["components/loginCmpt/login-common.css"],
  providers: [UserService, User]
})
export class LoginComponent {
  // Your TypeScript logic goes here
   isLoggingIn = true;
   user: User
  constructor(private router: Router, public userService: UserService) {
    console.log("inside Login")
    this.user = new User();
  }

submit() {
  if (this.isLoggingIn) {
    this.login();
  } else {
    this.signUp();
  }
}

  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }


login() {
  this.userService.login(this.user)
    .subscribe(
      (resp) => {   
        if(resp && resp.validUser) {
          this.router.navigate(["/home"]);
        } else {
          alert("Incorrect User Name/Password. Please try again.")
        }
    },
      (error) => alert("Unfortunately we could not find your account.")
    );
}


signUp() {
    this.userService.register(this.user)
      .subscribe(
      (res) => {
        if(res) {
          alert("Your account was successfully created.");
          this.toggleDisplay();
        } else {
          alert("An account with same User Name/Email Id already exists. Please select different User Name and Email Address.");
          return;  
       }
      },
      (error) => {
          console.log("Dialog closed!");
          this.router.navigate(["/home"])
      }
    )}
  }
