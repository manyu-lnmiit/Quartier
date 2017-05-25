import { Component } from "@angular/core";
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
  private email: string = "";
  private password: string = "";
  private firstName: string = "";
  private lastName: string = "";
  private userName: string = "";
  private isLoggingIn = true;
  user: User
  constructor(private router: Router, public userService: UserService) {
    console.log("inside Login")
    this.user = new User();
    this.user.email = this.email;
    console.log(this.email);
    this.user.password = this.password;
    console.log(this.password);
    this.user.firstName = this.firstName;
    console.log(this.firstName);
    this.user.lastName = this.lastName;
    console.log(this.lastName);
    this.user.username = this.userName;
    console.log(this.userName);
    console.log();
  }

  signUp() {
    this.userService.register(this.user)
      .subscribe(
      () => {
        //dialogs.alert("Your account was successfully created.").then(() => {
          console.dir("Dialog closed!");
       // });
        //this.toggleDisplay();
        this.router.navigate(["/home"])
      },
      (error) => {
        //dialogs.alert("Unfortunately we were unable to create your account.").then(() => {
          console.log("Dialog closed!");
          this.router.navigate(["/home"])
        //})

      })
  }
  toggleDisplay() {
    this.isLoggingIn = !this.isLoggingIn;
  }
}
