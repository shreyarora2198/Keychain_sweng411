"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
var user_1 = require("../user");
var company_1 = require("../company");
var router_1 = require("@angular/router");
var Promotion = /** @class */ (function () {
    function Promotion(companyName) {
        this.companyName = companyName;
    }
    return Promotion;
}());
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent(router, user, company) {
        this.router = router;
        this.user = user;
        this.company = company;
        this.companyResult = null;
        this.companyNames = [];
        this.indexCompanies = 0;
        this.promotionsForList = [];
    }
    PromotionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        firebase.getValue('/promotions/')
            .then(function (result) {
            _this.companyResult = result;
            var lengthCompanies = _this.getLengthCompanies();
            _this.checkCompanies(lengthCompanies);
        })
            .catch(function (error) { return alert("Error: " + error); });
    };
    PromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    PromotionsComponent.prototype.onItemTap = function (args) {
        this.company.setCompanyName(this.companyNames[args.index]);
        this.router.navigate(["/view-promotions"]);
    };
    PromotionsComponent.prototype.getLengthCompanies = function () {
        var length;
        for (var item in this.companyResult.value) {
            this.companyNames.push(item);
            length++;
        }
        return length;
    };
    PromotionsComponent.prototype.checkCompanies = function (lengthCompanies) {
        if (this.indexCompanies < lengthCompanies) {
            this.getCompaniesNames(lengthCompanies);
        }
    };
    PromotionsComponent.prototype.getCompaniesNames = function (lengthCompanies) {
        this.indexCompanies++;
        this.checkCompanies(lengthCompanies);
    };
    PromotionsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Promotions",
            moduleId: module.id,
            styleUrls: ["./promotions.component.css"],
            templateUrl: "./promotions.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            user_1.User,
            company_1.Company])
    ], PromotionsComponent);
    return PromotionsComponent;
}());
exports.PromotionsComponent = PromotionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBRW5DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELGdDQUE2QjtBQUM3QixzQ0FBcUM7QUFDckMsMENBQXlDO0FBRXpDO0lBQ0ksbUJBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUksQ0FBQztJQUMvQyxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFPSSw2QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixPQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFQcEMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFNZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksZUFBZSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsS0FBSyxDQUFDLFNBQVMsR0FBRSxLQUFLLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sdUNBQVMsR0FBaEIsVUFBaUIsSUFBSTtRQUNqQixJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxnREFBa0IsR0FBbEI7UUFDSSxJQUFJLE1BQU0sQ0FBQztRQUNYLEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUN0QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCw0Q0FBYyxHQUFkLFVBQWUsZUFBZTtRQUMxQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsY0FBYyxHQUFDLGVBQWUsQ0FBQyxDQUFBLENBQUM7WUFDcEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLGVBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQXBEUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7aURBUThCLGVBQU07WUFDUixXQUFJO1lBQ0QsaUJBQU87T0FUM0IsbUJBQW1CLENBcUQvQjtJQUFELDBCQUFDO0NBQUEsQUFyREQsSUFxREM7QUFyRFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdXNlclwiO1xyXG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSBcIi4uL2NvbXBhbnlcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY2xhc3MgUHJvbW90aW9ue1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGNvbXBhbnlOYW1lOiBzdHJpbmcpIHsgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIlByb21vdGlvbnNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vcHJvbW90aW9ucy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9wcm9tb3Rpb25zLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIFByb21vdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbXBhbnlSZXN1bHQgPSBudWxsO1xyXG4gICAgY29tcGFueU5hbWVzID0gW107XHJcbiAgICBpbmRleENvbXBhbmllcyA9IDA7XHJcbiAgICBwdWJsaWMgcHJvbW90aW9uc0Zvckxpc3Q6IEFycmF5PFByb21vdGlvbj47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29tcGFueTogQ29tcGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJylcclxuICAgICAgICAudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgdGhpcy5jb21wYW55UmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoQ29tcGFuaWVzID0gdGhpcy5nZXRMZW5ndGhDb21wYW5pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvbXBhbmllcyhsZW5ndGhDb21wYW5pZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT5hbGVydChcIkVycm9yOiBcIisgZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5jb21wYW55LnNldENvbXBhbnlOYW1lKHRoaXMuY29tcGFueU5hbWVzW2FyZ3MuaW5kZXhdKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlldy1wcm9tb3Rpb25zXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZW5ndGhDb21wYW5pZXMoKXtcclxuICAgICAgICB2YXIgbGVuZ3RoO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBpbiB0aGlzLmNvbXBhbnlSZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnlOYW1lcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICBsZW5ndGgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tDb21wYW5pZXMobGVuZ3RoQ29tcGFuaWVzKXtcclxuICAgICAgICBpZih0aGlzLmluZGV4Q29tcGFuaWVzPGxlbmd0aENvbXBhbmllcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFuaWVzTmFtZXMobGVuZ3RoQ29tcGFuaWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcGFuaWVzTmFtZXMobGVuZ3RoQ29tcGFuaWVzKXtcclxuICAgICAgICB0aGlzLmluZGV4Q29tcGFuaWVzKys7XHJcbiAgICAgICAgdGhpcy5jaGVja0NvbXBhbmllcyhsZW5ndGhDb21wYW5pZXMpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==