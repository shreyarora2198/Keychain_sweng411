"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.email = "";
        this.password = "";
        this.company = "";
        this.isCompanyUser = false;
        // Use the component constructor to inject providers.
    }
    SignupComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SignupComponent.prototype.routeLogin = function () {
        var _this = this;
        console.log(this.isCompanyUser);
        firebase.createUser({
            email: this.email,
            password: this.password
        })
            .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord
            console.log("Successfully created new user:", userRecord.uid);
            if (_this.isCompanyUser) {
                firebase.setValue('/companies' + '/' + JSON.stringify(userRecord.uid), {
                    email: _this.email,
                    company: _this.company
                });
            }
            else {
                firebase.setValue('/users' + '/' + JSON.stringify(userRecord.uid), {
                    email: _this.email
                });
            }
            _this.router.navigate(["/login"]);
        })
            .catch(function (error) {
            console.log("Error creating new user:", error);
        });
    };
    SignupComponent.prototype.toggleCompanyUser = function () {
        this.isCompanyUser = !this.isCompanyUser;
    };
    SignupComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Signup",
            moduleId: module.id,
            styleUrls: ["./signup.component.css"],
            templateUrl: "./signup.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN2RCxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQU9qRTtJQU1JLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUdsQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG9DQUFVLEdBQVY7UUFBQSxpQkErQkM7UUE5QkcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDaEMsUUFBUSxDQUFDLFVBQVUsQ0FDZjtZQUNJLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FFMUIsQ0FDSjthQUNBLElBQUksQ0FBQyxVQUFDLFVBQVU7WUFDZixrRUFBa0U7WUFDbEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUQsRUFBRSxDQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFBLENBQUM7Z0JBQ25CLFFBQVEsQ0FBQyxRQUFRLENBQ2YsWUFBWSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDL0M7b0JBQ0ksS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO29CQUNqQixPQUFPLEVBQUUsS0FBSSxDQUFDLE9BQU87aUJBQ3hCLENBQUMsQ0FBQTtZQUNSLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixRQUFRLENBQUMsUUFBUSxDQUNiLFFBQVEsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQzNDO29CQUNJLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztZQUNELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBUyxLQUFLO1lBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQWpEUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO2lEQU84QixlQUFNO09BTnpCLGVBQWUsQ0FrRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxudmFyIGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNpZ251cFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9zaWdudXAuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbWFpbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcclxuICAgIGNvbXBhbnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc0NvbXBhbnlVc2VyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9ICAgXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVMb2dpbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ29tcGFueVVzZXIpO1xyXG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKCh1c2VyUmVjb3JkKT0+IHtcclxuICAgICAgICAgIC8vIFNlZSB0aGUgVXNlclJlY29yZCByZWZlcmVuY2UgZG9jIGZvciB0aGUgY29udGVudHMgb2YgdXNlclJlY29yZFxyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJTdWNjZXNzZnVsbHkgY3JlYXRlZCBuZXcgdXNlcjpcIiwgdXNlclJlY29yZC51aWQpO1xyXG4gICAgICAgICAgaWYodGhpcy5pc0NvbXBhbnlVc2VyKXtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAgICAgICAgICcvY29tcGFuaWVzJysnLycrSlNPTi5zdHJpbmdpZnkodXNlclJlY29yZC51aWQpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHRoaXMuY29tcGFueVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAgICAgICAgICcvdXNlcnMnKycvJytKU09OLnN0cmluZ2lmeSh1c2VyUmVjb3JkLnVpZCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIGNyZWF0aW5nIG5ldyB1c2VyOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGFueVVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBhbnlVc2VyID0gIXRoaXMuaXNDb21wYW55VXNlcjtcclxuICAgIH1cclxufSJdfQ==