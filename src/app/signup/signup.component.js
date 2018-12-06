"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.email = "";
        this.password = "";
        this.company = "";
        this.isCompanyUser = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SignupComponent.prototype.routeLogin = function () {
        var _this = this;
        firebase.createUser({
            email: this.email,
            password: this.password
        })
            .then(function (userRecord) {
            // See the UserRecord reference doc for the contents of userRecord
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQU92RDtJQU1JLHlCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUxsQyxVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUNyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQUd0QixDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUFBLGlCQTRCQztRQTNCRyxRQUFRLENBQUMsVUFBVSxDQUNmO1lBQ0ksS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUUxQixDQUNKO2FBQ0EsSUFBSSxDQUFDLFVBQUMsVUFBVTtZQUNmLGtFQUFrRTtZQUNsRSxFQUFFLENBQUEsQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUEsQ0FBQztnQkFDbkIsUUFBUSxDQUFDLFFBQVEsQ0FDZixZQUFZLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUMvQztvQkFDSSxLQUFLLEVBQUUsS0FBSSxDQUFDLEtBQUs7b0JBQ2pCLE9BQU8sRUFBRSxLQUFJLENBQUMsT0FBTztpQkFDeEIsQ0FBQyxDQUFBO1lBQ1IsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNKLFFBQVEsQ0FBQyxRQUFRLENBQ2IsUUFBUSxHQUFDLEdBQUcsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFDM0M7b0JBQ0ksS0FBSyxFQUFFLEtBQUksQ0FBQyxLQUFLO2lCQUNwQixDQUFDLENBQUE7WUFDUixDQUFDO1lBQ0QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFTLEtBQUs7UUFDckIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQTdDUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO2lEQU84QixlQUFNO09BTnpCLGVBQWUsQ0E4QzNCO0lBQUQsc0JBQUM7Q0FBQSxBQTlDRCxJQThDQztBQTlDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG52YXIgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaWdudXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc2lnbnVwLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgZW1haWwgOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjb21wYW55OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgaXNDb21wYW55VXNlciA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgIH0gICBcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICByb3V0ZUxvZ2luKCk6IHZvaWQge1xyXG4gICAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICAgIC50aGVuKCh1c2VyUmVjb3JkKT0+IHtcclxuICAgICAgICAgIC8vIFNlZSB0aGUgVXNlclJlY29yZCByZWZlcmVuY2UgZG9jIGZvciB0aGUgY29udGVudHMgb2YgdXNlclJlY29yZFxyXG4gICAgICAgICAgaWYodGhpcy5pc0NvbXBhbnlVc2VyKXtcclxuICAgICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAgICAgICAgICcvY29tcGFuaWVzJysnLycrSlNPTi5zdHJpbmdpZnkodXNlclJlY29yZC51aWQpLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IHRoaXMuY29tcGFueVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAgICAgICAgICcvdXNlcnMnKycvJytKU09OLnN0cmluZ2lmeSh1c2VyUmVjb3JkLnVpZCksXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGFueVVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBhbnlVc2VyID0gIXRoaXMuaXNDb21wYW55VXNlcjtcclxuICAgIH1cclxufSJdfQ==