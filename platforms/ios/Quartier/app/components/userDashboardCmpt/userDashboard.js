"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var userService_1 = require("../../services/userService");
var router_1 = require("@angular/router");
var UserDashboardComponent = (function () {
    function UserDashboardComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        // Your TypeScript logic goes here
        this.email = "";
        this.isLoggingIn = true;
        console.log("inside Login");
    }
    UserDashboardComponent.prototype.signUp = function () {
    };
    UserDashboardComponent.prototype.toggleDisplay = function () {
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    core_1.Component({
        selector: "dashboard",
        templateUrl: "",
        styleUrls: ["components/userDashboardCmpt/userDashboard.css"],
        providers: []
    }),
    __metadata("design:paramtypes", [router_1.Router, userService_1.UserService])
], UserDashboardComponent);
exports.UserDashboardComponent = UserDashboardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlckRhc2hib2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXJEYXNoYm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsMERBQXdEO0FBRXhELDBDQUF5QztBQVF6QyxJQUFhLHNCQUFzQjtJQUtqQyxnQ0FBb0IsTUFBYyxFQUFTLFdBQXdCO1FBQS9DLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUpuRSxrQ0FBa0M7UUFDMUIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixnQkFBVyxHQUFHLElBQUksQ0FBQztRQUd6QixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFBO0lBRTdCLENBQUM7SUFFRCx1Q0FBTSxHQUFOO0lBRUEsQ0FBQztJQUNELDhDQUFhLEdBQWI7SUFFQSxDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLHNCQUFzQjtJQU5sQyxnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsV0FBVyxFQUFFLEVBQUU7UUFDZixTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQztRQUM3RCxTQUFTLEVBQUUsRUFBRTtLQUNkLENBQUM7cUNBTTRCLGVBQU0sRUFBc0IseUJBQVc7R0FMeEQsc0JBQXNCLENBZ0JsQztBQWhCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvdXNlclNlcnZpY2VcIlxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi8uLi9tb2RlbC9Vc2VyXCJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcImRhc2hib2FyZFwiLFxuICB0ZW1wbGF0ZVVybDogXCJcIixcbiAgc3R5bGVVcmxzOiBbXCJjb21wb25lbnRzL3VzZXJEYXNoYm9hcmRDbXB0L3VzZXJEYXNoYm9hcmQuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJEYXNoYm9hcmRDb21wb25lbnQge1xuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXG4gIHByaXZhdGUgZW1haWw6IHN0cmluZyA9IFwiXCI7XG4gIHByaXZhdGUgaXNMb2dnaW5nSW4gPSB0cnVlO1xuICB1c2VyOiBVc2VyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHB1YmxpYyB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBMb2dpblwiKVxuICAgIFxuICB9XG5cbiAgc2lnblVwKCkge1xuICAgIFxuICB9XG4gIHRvZ2dsZURpc3BsYXkoKSB7XG4gICBcbiAgfVxufVxuIl19