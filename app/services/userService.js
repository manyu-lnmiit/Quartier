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
    }
    UserService.prototype.register = function (user) {
        console.log("inside service");
        var headers = new http_1.Headers();
        headers.append("Content-Type", "application/json");
        console.log("username = " + user.email + "password id is " + user.password);
        return this.http.post(this.apiSignupUrl, JSON.stringify({
            userName: user.username,
            emailId: user.email,
            password: user.password,
            firstName: user.firstName,
            lastName: user.lastName
        }), { headers: headers })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c2VyU2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGdDQUE4QjtBQUM5QixpQ0FBK0I7QUFLL0IsSUFBYSxXQUFXO0lBRXRCLHFCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUR0QixpQkFBWSxHQUFHLGtEQUFrRCxDQUFDO0lBQ3pDLENBQUM7SUFFbEMsOEJBQVEsR0FBUixVQUFVLElBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRSxJQUFJLENBQUMsS0FBSyxHQUFFLGlCQUFpQixHQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4RSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFDLElBQUksQ0FBQyxRQUFRO1NBRXZCLENBQUMsRUFDRixFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FDckI7YUFDQSxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxrQ0FBWSxHQUFaLFVBQWEsS0FBZTtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLGVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNILGtCQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxXQUFXO0lBRHZCLGlCQUFVLEVBQUU7cUNBR2UsV0FBSTtHQUZuQixXQUFXLENBNkJ2QjtBQTdCWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSHR0cCwgSGVhZGVycywgUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvaHR0cFwiO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzL1J4XCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9kb1wiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL21vZGVsL1VzZXJcIlxuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XG4gIHByaXZhdGUgYXBpU2lnbnVwVXJsID0gXCJodHRwOi8vMTI3LjAuMC4xOjgwODAvSWdpbml0YS93ZWJhcGkvdXNlci9zaWduVXBcIjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBodHRwOiBIdHRwKSB7fVxuXG4gIHJlZ2lzdGVyICh1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgc2VydmljZVwiKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgaGVhZGVycy5hcHBlbmQoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgIGNvbnNvbGUubG9nKFwidXNlcm5hbWUgPSBcIiArdXNlci5lbWFpbCsgXCJwYXNzd29yZCBpZCBpcyBcIiArdXNlci5wYXNzd29yZClcbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXG4gICAgICB0aGlzLmFwaVNpZ251cFVybCxcbiAgICAgIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgdXNlck5hbWU6IHVzZXIudXNlcm5hbWUsXG4gICAgICAgIGVtYWlsSWQ6IHVzZXIuZW1haWwsXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxuICAgICAgICBmaXJzdE5hbWU6IHVzZXIuZmlyc3ROYW1lLFxuICAgICAgICBsYXN0TmFtZTp1c2VyLmxhc3ROYW1lXG4gICAgICAgIFxuICAgICAgfSksXG4gICAgICB7IGhlYWRlcnM6IGhlYWRlcnMgfVxuICAgIClcbiAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICB9XG5cbiAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBoYXBwZW5lZC5cIilcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XG4gIH1cbn0iXX0=