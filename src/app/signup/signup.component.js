"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            // See the UserRecord reference doc for the contents of userRecord.
            console.log("Successfully created new user:", userRecord.uid);
            if (_this.isCompanyUser) {
                firebase.setValue('/companies' + '/' + userRecord.uid, {
                    email: _this.email,
                    company: _this.company
                });
            }
            else {
                firebase.setValue('/users' + '/' + userRecord.uid, {
                    email: _this.email
                });
            }
        })
            .catch(function (error) {
            console.log("Error creating new user:", error);
        });
        // this.router.navigate(["/login"]);
    };
    SignupComponent.prototype.toggleCompanyUser = function () {
        this.isCompanyUser = !this.isCompanyUser;
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: "Signup",
            moduleId: module.id,
            styleUrls: ["./signup.component.css"],
            templateUrl: "./signup.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBT2pFO0lBTUkseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLFVBQUssR0FBWSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR2xCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQStCQztRQTlCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxRQUFRLENBQUMsVUFBVSxDQUNmO1lBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUUxQixDQUNKO2FBQ0EsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNmLG1FQUFtRTtZQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDbkIsUUFBUSxDQUFDLFFBQVEsQ0FDZixZQUFZLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQy9CO29CQUNJLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSztvQkFDakIsT0FBTyxFQUFFLEtBQUksQ0FBQyxPQUFPO2lCQUN4QixDQUFDLENBQUE7WUFDUixDQUFDO1lBQUEsSUFBSSxDQUFBLENBQUM7Z0JBQ0osUUFBUSxDQUFDLFFBQVEsQ0FDYixRQUFRLEdBQUMsR0FBRyxHQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQzNCO29CQUNJLEtBQUssRUFBRSxLQUFJLENBQUMsS0FBSztpQkFDcEIsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztRQUNILENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFTLEtBQUs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUNILG9DQUFvQztJQUN4QyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQWpEUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQU84QixlQUFNO09BTnpCLGVBQWUsQ0FrRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxERCxJQWtEQztBQWxEWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxudmFyIGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlNpZ251cFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9zaWdudXAuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vc2lnbnVwLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFNpZ251cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBlbWFpbCA6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcclxuICAgIGNvbXBhbnk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBpc0NvbXBhbnlVc2VyID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9ICAgXHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVMb2dpbigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzQ29tcGFueVVzZXIpO1xyXG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKCh1c2VyUmVjb3JkKT0+IHtcclxuICAgICAgICAgIC8vIFNlZSB0aGUgVXNlclJlY29yZCByZWZlcmVuY2UgZG9jIGZvciB0aGUgY29udGVudHMgb2YgdXNlclJlY29yZC5cclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiU3VjY2Vzc2Z1bGx5IGNyZWF0ZWQgbmV3IHVzZXI6XCIsIHVzZXJSZWNvcmQudWlkKTtcclxuICAgICAgICAgIGlmKHRoaXMuaXNDb21wYW55VXNlcil7XHJcbiAgICAgICAgICAgICAgZmlyZWJhc2Uuc2V0VmFsdWUoXHJcbiAgICAgICAgICAgICAgICAnL2NvbXBhbmllcycrJy8nK3VzZXJSZWNvcmQudWlkLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHRoaXMuY29tcGFueVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAgICAgICAgICcvdXNlcnMnKycvJyt1c2VyUmVjb3JkLnVpZCxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBjcmVhdGluZyBuZXcgdXNlcjpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGFueVVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBhbnlVc2VyID0gIXRoaXMuaXNDb21wYW55VXNlcjtcclxuICAgIH1cclxufSJdfQ==