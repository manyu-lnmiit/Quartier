"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userService_1 = require("../../services/userService");
var User_1 = require("../../model/User");
var router_1 = require("@angular/router");
var HomeComponent = (function () {
    // Your TypeScript logic goes here
    function HomeComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        console.log("inside Home Cmpt");
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "components/homeCmpt/homeCmpt.html",
        styleUrls: ["components/homeCmpt/homeCmpt.css"],
        providers: [userService_1.UserService, User_1.User]
    }),
    __metadata("design:paramtypes", [router_1.Router, userService_1.UserService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZUNtcHQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lQ21wdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwREFBd0Q7QUFDeEQseUNBQXVDO0FBQ3ZDLDBDQUF5QztBQVF6QyxJQUFhLGFBQWE7SUFDeEIsa0NBQWtDO0lBRWxDLHVCQUFvQixNQUFjLEVBQVEsV0FBd0I7UUFBOUMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFRLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxXQUFXO1FBQ3JCLFdBQVcsRUFBRSxtQ0FBbUM7UUFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7UUFDL0MsU0FBUyxFQUFDLENBQUMseUJBQVcsRUFBQyxXQUFJLENBQUM7S0FDN0IsQ0FBQztxQ0FJNEIsZUFBTSxFQUFxQix5QkFBVztHQUh2RCxhQUFhLENBT3pCO0FBUFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlclNlcnZpY2VcIlxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9Vc2VyXCJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImxvZ2luLWFwcFwiLFxuICB0ZW1wbGF0ZVVybDogXCJjb21wb25lbnRzL2hvbWVDbXB0L2hvbWVDbXB0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJjb21wb25lbnRzL2hvbWVDbXB0L2hvbWVDbXB0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOltVc2VyU2VydmljZSxVc2VyXSBcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcbiBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixwdWJsaWMgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKXtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBIb21lIENtcHRcIik7XG4gIH1cbiAgXG59XG4iXX0=