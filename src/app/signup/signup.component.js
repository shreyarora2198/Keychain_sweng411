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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBQ3pDLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3ZELElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBT2pFO0lBTUkseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBTGxDLFVBQUssR0FBWSxFQUFFLENBQUM7UUFDcEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR2xCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQStCQztRQTlCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNoQyxRQUFRLENBQUMsVUFBVSxDQUNmO1lBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUUxQixDQUNKO2FBQ0EsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNmLGtFQUFrRTtZQUNsRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5RCxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDbkIsUUFBUSxDQUFDLFFBQVEsQ0FDZixZQUFZLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUMvQztvQkFDSSxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztpQkFDeEIsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNKLFFBQVEsQ0FBQyxRQUFRLENBQ2IsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDM0M7b0JBQ0ksS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUE7WUFDUixDQUFDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFTLEtBQUs7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM3QyxDQUFDO0lBakRRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBTzhCLGVBQU07T0FOekIsZUFBZSxDQWtEM0I7SUFBRCxzQkFBQztDQUFBLEFBbERELElBa0RDO0FBbERZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbnZhciBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG52YXIgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiU2lnbnVwXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3NpZ251cC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9zaWdudXAuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGVtYWlsIDogc3RyaW5nID0gXCJcIjtcclxuICAgIHBhc3N3b3JkOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY29tcGFueTogc3RyaW5nID0gXCJcIjtcclxuICAgIGlzQ29tcGFueVVzZXIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH0gICBcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICByb3V0ZUxvZ2luKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuaXNDb21wYW55VXNlcik7XHJcbiAgICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcihcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLnRoZW4oKHVzZXJSZWNvcmQpPT4ge1xyXG4gICAgICAgICAgLy8gU2VlIHRoZSBVc2VyUmVjb3JkIHJlZmVyZW5jZSBkb2MgZm9yIHRoZSBjb250ZW50cyBvZiB1c2VyUmVjb3JkXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIlN1Y2Nlc3NmdWxseSBjcmVhdGVkIG5ldyB1c2VyOlwiLCB1c2VyUmVjb3JkLnVpZCk7XHJcbiAgICAgICAgICBpZih0aGlzLmlzQ29tcGFueVVzZXIpe1xyXG4gICAgICAgICAgICAgIGZpcmViYXNlLnNldFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgJy9jb21wYW5pZXMnKycvJytKU09OLnN0cmluZ2lmeSh1c2VyUmVjb3JkLnVpZCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogdGhpcy5jb21wYW55XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGZpcmViYXNlLnNldFZhbHVlKFxyXG4gICAgICAgICAgICAgICAgJy91c2VycycrJy8nK0pTT04uc3RyaW5naWZ5KHVzZXJSZWNvcmQudWlkKSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IgY3JlYXRpbmcgbmV3IHVzZXI6XCIsIGVycm9yKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVDb21wYW55VXNlcigpIHtcclxuICAgICAgICB0aGlzLmlzQ29tcGFueVVzZXIgPSAhdGhpcy5pc0NvbXBhbnlVc2VyO1xyXG4gICAgfVxyXG59Il19
