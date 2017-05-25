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
        this.isLoggingIn = true;
        console.log("inside Login");
        this.user = new User_1.User();
    }
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function (resp) {
            if (resp && resp.validUser) {
                _this.router.navigate(["/home"]);
            }
            else {
                alert("Incorrect User Name/Password. Please try again.");
            }
        }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function (res) {
            if (res) {
                alert("Your account was successfully created.");
                _this.toggleDisplay();
            }
            else {
                alert("An account with same User Name/Email Id already exists. Please select different User Name and Email Address.");
                return;
            }
        }, function (error) {
            console.log("Dialog closed!");
            _this.router.navigate(["/home"]);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5DbXB0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW5DbXB0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlEO0FBQ2pELDBEQUF3RDtBQUN4RCx5Q0FBdUM7QUFDdkMsMENBQXlDO0FBUXpDLElBQWEsY0FBYztJQUl6Qix3QkFBb0IsTUFBYyxFQUFTLFdBQXdCO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUhuRSxrQ0FBa0M7UUFDakMsZ0JBQVcsR0FBRyxJQUFJLENBQUM7UUFHbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtRQUMzQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVILCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDTixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFQyxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUdILDhCQUFLLEdBQUw7UUFBQSxpQkFZQztRQVhDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDOUIsU0FBUyxDQUNSLFVBQUMsSUFBSTtZQUNILEVBQUUsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDTixLQUFLLENBQUMsaURBQWlELENBQUMsQ0FBQTtZQUMxRCxDQUFDO1FBQ0wsQ0FBQyxFQUNDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLCtDQUErQyxDQUFDLEVBQXRELENBQXNELENBQ2xFLENBQUM7SUFDTixDQUFDO0lBR0QsK0JBQU0sR0FBTjtRQUFBLGlCQWdCTTtRQWZGLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDakMsU0FBUyxDQUNWLFVBQUMsR0FBRztZQUNGLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsS0FBSyxDQUFDLHdDQUF3QyxDQUFDLENBQUM7Z0JBQ2hELEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN2QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ04sS0FBSyxDQUFDLDhHQUE4RyxDQUFDLENBQUM7Z0JBQ3RILE1BQU0sQ0FBQztZQUNWLENBQUM7UUFDRixDQUFDLEVBQ0QsVUFBQyxLQUFLO1lBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQTtRQUNuQyxDQUFDLENBQ0YsQ0FBQTtJQUFBLENBQUM7SUFDSixxQkFBQztBQUFELENBQUMsQUF0REgsSUFzREc7QUF0RFUsY0FBYztJQU4xQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLHFDQUFxQztRQUNsRCxTQUFTLEVBQUUsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNwRCxTQUFTLEVBQUUsQ0FBQyx5QkFBVyxFQUFFLFdBQUksQ0FBQztLQUMvQixDQUFDO3FDQUs0QixlQUFNLEVBQXNCLHlCQUFXO0dBSnhELGNBQWMsQ0FzRHhCO0FBdERVLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy91c2VyU2VydmljZVwiXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL21vZGVsL1VzZXJcIlxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibG9naW4tYXBwXCIsXG4gIHRlbXBsYXRlVXJsOiBcImNvbXBvbmVudHMvbG9naW5DbXB0L2xvZ2luQ21wdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiY29tcG9uZW50cy9sb2dpbkNtcHQvbG9naW4tY29tbW9uLmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2UsIFVzZXJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICAgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICAgdXNlcjogVXNlclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgTG9naW5cIilcbiAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xuICB9XG5cbnN1Ym1pdCgpIHtcbiAgaWYgKHRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICB0aGlzLmxvZ2luKCk7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5zaWduVXAoKTtcbiAgfVxufVxuXG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICAgdGhpcy5pc0xvZ2dpbmdJbiA9ICF0aGlzLmlzTG9nZ2luZ0luO1xuICB9XG5cblxubG9naW4oKSB7XG4gIHRoaXMudXNlclNlcnZpY2UubG9naW4odGhpcy51c2VyKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICAocmVzcCkgPT4geyAgIFxuICAgICAgICBpZihyZXNwICYmIHJlc3AudmFsaWRVc2VyKSB7XG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2hvbWVcIl0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IFVzZXIgTmFtZS9QYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi5cIilcbiAgICAgICAgfVxuICAgIH0sXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KFwiVW5mb3J0dW5hdGVseSB3ZSBjb3VsZCBub3QgZmluZCB5b3VyIGFjY291bnQuXCIpXG4gICAgKTtcbn1cblxuXG5zaWduVXAoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5yZWdpc3Rlcih0aGlzLnVzZXIpXG4gICAgICAuc3Vic2NyaWJlKFxuICAgICAgKHJlcykgPT4ge1xuICAgICAgICBpZihyZXMpIHtcbiAgICAgICAgICBhbGVydChcIllvdXIgYWNjb3VudCB3YXMgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQuXCIpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlRGlzcGxheSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFsZXJ0KFwiQW4gYWNjb3VudCB3aXRoIHNhbWUgVXNlciBOYW1lL0VtYWlsIElkIGFscmVhZHkgZXhpc3RzLiBQbGVhc2Ugc2VsZWN0IGRpZmZlcmVudCBVc2VyIE5hbWUgYW5kIEVtYWlsIEFkZHJlc3MuXCIpO1xuICAgICAgICAgIHJldHVybjsgIFxuICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9ob21lXCJdKVxuICAgICAgfVxuICAgICl9XG4gIH1cbiJdfQ==