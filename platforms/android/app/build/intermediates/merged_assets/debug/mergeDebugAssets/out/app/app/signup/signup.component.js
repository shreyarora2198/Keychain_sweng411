"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var SignupComponent = /** @class */ (function () {
    function SignupComponent(router) {
        this.router = router;
        this.isCompanyUser = false;
        // Use the component constructor to inject providers.
    }
    SignupComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    SignupComponent.prototype.routeLogin = function () {
        this.router.navigate(["/login"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBUXpDO0lBSUkseUJBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRmxDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBR2xCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsa0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0NBQVUsR0FBVjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsMkNBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDN0MsQ0FBQztJQWxCUSxlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7WUFDckMsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDO3lDQUs4QixlQUFNO09BSnpCLGVBQWUsQ0FtQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJTaWdudXBcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vc2lnbnVwLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3NpZ251cC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTaWdudXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGlzQ29tcGFueVVzZXIgPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH0gICBcclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICByb3V0ZUxvZ2luKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlQ29tcGFueVVzZXIoKSB7XHJcbiAgICAgICAgdGhpcy5pc0NvbXBhbnlVc2VyID0gIXRoaXMuaXNDb21wYW55VXNlcjtcclxuICAgIH1cclxufSJdfQ==