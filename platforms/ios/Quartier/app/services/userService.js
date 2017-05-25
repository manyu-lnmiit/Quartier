"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/do");
require("rxjs/add/operator/map");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.apiSignupUrl = "http://127.0.0.1:8080/Iginita/webapi/user/signUp";
        this.apiLoginUrl = "http://127.0.0.1:8080/Iginita/webapi/user/login";
    }
    UserService.prototype.register = function (user) {
        console.log("inside service");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log("username = " + user.emailId + "password id is " + user.password);
        return this.http.post(this.apiSignupUrl, JSON.stringify({
            userName: user.userName,
            emailId: user.emailId,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName
        }), { headers: headers }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.login = function (user) {
        console.log("insidelogin service");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log("username = " + user.userName + "password id is " + user.password);
        return this.http.post(this.apiLoginUrl, JSON.stringify({
            userName: user.userName,
            password: user.password
        }), { headers: headers }).map(function (res) { return res.json(); })
            .catch(this.handleErrors);
    };
    UserService.prototype.handleErrors = function (error) {
        console.log("error happened.");
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFLL0IsSUFBYSxXQUFXO0lBR3RCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUZ0QixpQkFBWSxHQUFHLGtEQUFrRCxDQUFDO1FBQ2xFLGdCQUFXLEdBQUcsaURBQWlELENBQUM7SUFDdkMsQ0FBQztJQUVsQyw4QkFBUSxHQUFSLFVBQVUsSUFBVTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxPQUFPLEdBQUUsaUJBQWlCLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUMsSUFBSSxDQUFDLFFBQVE7U0FFdkIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQUssR0FBTCxVQUFNLElBQVU7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLEdBQUcsSUFBSSxjQUFPLEVBQUUsQ0FBQztRQUM1QixPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFFLElBQUksQ0FBQyxRQUFRLEdBQUUsaUJBQWlCLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzNFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDbkIsSUFBSSxDQUFDLFdBQVcsRUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQztZQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxFQUNGLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUNyQixDQUFDLEdBQUcsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsQ0FBQyxJQUFJLEVBQUUsRUFBVixDQUFVLENBQUM7YUFDdkIsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsa0NBQVksR0FBWixVQUFhLEtBQWU7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUMsQUE5Q0QsSUE4Q0M7QUE5Q1ksV0FBVztJQUR2QixpQkFBVSxFQUFFO3FDQUllLFdBQUk7R0FIbkIsV0FBVyxDQThDdkI7QUE5Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvZG9cIjtcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL21hcFwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi9tb2RlbC9Vc2VyXCJcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICBwcml2YXRlIGFwaVNpZ251cFVybCA9IFwiaHR0cDovLzEyNy4wLjAuMTo4MDgwL0lnaW5pdGEvd2ViYXBpL3VzZXIvc2lnblVwXCI7XG4gIHByaXZhdGUgYXBpTG9naW5VcmwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6ODA4MC9JZ2luaXRhL3dlYmFwaS91c2VyL2xvZ2luXCI7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge31cblxuICByZWdpc3RlciAodXNlcjogVXNlcik6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIHNlcnZpY2VcIik7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycygpO1xuICAgIGhlYWRlcnMuYXBwZW5kKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICBjb25zb2xlLmxvZyhcInVzZXJuYW1lID0gXCIgK3VzZXIuZW1haWxJZCsgXCJwYXNzd29yZCBpZCBpcyBcIiArdXNlci5wYXNzd29yZClcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICB0aGlzLmFwaVNpZ251cFVybCxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlck5hbWU6IHVzZXIudXNlck5hbWUsXG4gICAgICAgIGVtYWlsSWQ6IHVzZXIuZW1haWxJZCxcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgIGZpcnN0TmFtZTogdXNlci5maXJzdE5hbWUsXG4gICAgICAgIGxhc3ROYW1lOnVzZXIubGFzdE5hbWVcbiAgICAgICAgXG4gICAgICB9KSxcbiAgICAgIHsgaGVhZGVyczogaGVhZGVycyB9XG4gICAgKS5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLmNhdGNoKHRoaXMuaGFuZGxlRXJyb3JzKTtcbiAgfVxuXG4gIGxvZ2luKHVzZXI6IFVzZXIpIDogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGVsb2dpbiBzZXJ2aWNlXCIpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICBoZWFkZXJzLmFwcGVuZChcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgY29uc29sZS5sb2coXCJ1c2VybmFtZSA9IFwiICt1c2VyLnVzZXJOYW1lKyBcInBhc3N3b3JkIGlkIGlzIFwiICt1c2VyLnBhc3N3b3JkKVxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcbiAgICAgIHRoaXMuYXBpTG9naW5VcmwsXG4gICAgICBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIHVzZXJOYW1lOiB1c2VyLnVzZXJOYW1lLFxuICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxuICAgICAgfSksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICAgICkubWFwKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gIH1cblxuICBoYW5kbGVFcnJvcnMoZXJyb3I6IFJlc3BvbnNlKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVycm9yIGhhcHBlbmVkLlwiKVxuICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGVycm9yLmpzb24oKSkpO1xuICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yKTtcbiAgfVxufSJdfQ==