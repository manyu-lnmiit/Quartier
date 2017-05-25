"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userService_1 = require("../../services/userService");
var User_1 = require("../../model/User");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        // Your TypeScript logic goes here
        this.email = "";
        this.password = "";
        this.firstName = "";
        this.lastName = "";
        this.userName = "";
        this.isLoggingIn = true;
        console.log("inside Login");
        this.user = new User_1.User();
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
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            //dialogs.alert("Your account was successfully created.").then(() => {
            console.dir("Dialog closed!");
            // });
            //this.toggleDisplay();
            _this.router.navigate(["/home"]);
        }, function (error) {
            //dialogs.alert("Unfortunately we were unable to create your account.").then(() => {
            console.log("Dialog closed!");
            _this.router.navigate(["/home"]);
            //})
        });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "components/loginCmpt/loginCmpt.html",
        styleUrls: ["components/loginCmpt/login-common.css"],
        providers: [userService_1.UserService, User_1.User]
    }),
    __metadata("design:paramtypes", [router_1.Router, userService_1.UserService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5DbXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5DbXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBDO0FBQzFDLDBEQUF3RDtBQUN4RCx5Q0FBdUM7QUFDdkMsMENBQXlDO0FBT3pDLElBQWEsY0FBYztJQVN6Qix3QkFBb0IsTUFBYyxFQUFTLFdBQXdCO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQVJuRSxrQ0FBa0M7UUFDMUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUE7UUFDM0IsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFpQkM7UUFoQkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNqQyxTQUFTLENBQ1Y7WUFDRSxzRUFBc0U7WUFDcEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ2pDLE1BQU07WUFDTCx1QkFBdUI7WUFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFBO1FBQ2pDLENBQUMsRUFDRCxVQUFDLEtBQUs7WUFDSixvRkFBb0Y7WUFDbEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtZQUNqQyxJQUFJO1FBRU4sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBQ0Qsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxxQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNwRCxTQUFTLEVBQUUsQ0FBQyx5QkFBVyxFQUFFLFdBQUksQ0FBQztLQUMvQixDQUFDO3FDQVU0QixlQUFNLEVBQXNCLHlCQUFXO0dBVHhELGNBQWMsQ0E4QzFCO0FBOUNZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3VzZXJTZXJ2aWNlXCJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vbW9kZWwvVXNlclwiXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW4tYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvbG9naW5DbXB0L2xvZ2luQ21wdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiY29tcG9uZW50cy9sb2dpbkNtcHQvbG9naW4tY29tbW9uLmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFVzZXJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBwcml2YXRlIGVtYWlsOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlwiO1xuICBwcml2YXRlIGZpcnN0TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBsYXN0TmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSB1c2VyTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgcHJpdmF0ZSBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gIHVzZXI6IFVzZXJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHVibGljIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIExvZ2luXCIpXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgICB0aGlzLnVzZXIuZW1haWwgPSB0aGlzLmVtYWlsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZW1haWwpO1xuICAgIHRoaXMudXNlci5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG4gICAgY29uc29sZS5sb2codGhpcy5wYXNzd29yZCk7XG4gICAgdGhpcy51c2VyLmZpcnN0TmFtZSA9IHRoaXMuZmlyc3ROYW1lO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3ROYW1lKTtcbiAgICB0aGlzLnVzZXIubGFzdE5hbWUgPSB0aGlzLmxhc3ROYW1lO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGFzdE5hbWUpO1xuICAgIHRoaXMudXNlci51c2VybmFtZSA9IHRoaXMudXNlck5hbWU7XG4gICAgY29uc29sZS5sb2codGhpcy51c2VyTmFtZSk7XG4gICAgY29uc29sZS5sb2coKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAoKSA9PiB7XG4gICAgICAgIC8vZGlhbG9ncy5hbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUuZGlyKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgLy8gfSk7XG4gICAgICAgIC8vdGhpcy50b2dnbGVEaXNwbGF5KCk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKVxuICAgICAgfSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAvL2RpYWxvZ3MuYWxlcnQoXCJVbmZvcnR1bmF0ZWx5IHdlIHdlcmUgdW5hYmxlIHRvIGNyZWF0ZSB5b3VyIGFjY291bnQuXCIpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pXG4gICAgICAgIC8vfSlcblxuICAgICAgfSlcbiAgfVxuICB0b2dnbGVEaXNwbGF5KCkge1xuICAgIHRoaXMuaXNMb2dnaW5nSW4gPSAhdGhpcy5pc0xvZ2dpbmdJbjtcbiAgfVxufVxuIl19