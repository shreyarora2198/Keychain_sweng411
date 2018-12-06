"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
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
            .catch(function (error) { return console.log("Error" + error); });
    };
    PromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    PromotionsComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
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
        else {
            //add to promotions for list
            // this.companyNamesFinal = this.companyNames;
        }
    };
    PromotionsComponent.prototype.getCompaniesNames = function (lengthCompanies) {
        this.indexCompanies++;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ25FLGdDQUE2QjtBQUM3QixzQ0FBcUM7QUFDckMsMENBQXlDO0FBRXpDO0lBQ0ksbUJBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUksQ0FBQztJQUMvQyxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFPSSw2QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixPQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFQcEMsa0JBQWEsR0FBRyxJQUFJLENBQUM7UUFDckIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFNZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksZUFBZSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCO1FBQ0ksSUFBSSxNQUFNLENBQUM7UUFDWCxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLGVBQWU7UUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCw0QkFBNEI7WUFDNUIsOENBQThDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLGVBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUF4RFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO2lEQVE4QixlQUFNO1lBQ1IsV0FBSTtZQUNELGlCQUFPO09BVDNCLG1CQUFtQixDQXlEL0I7SUFBRCwwQkFBQztDQUFBLEFBekRELElBeURDO0FBekRZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGluaXRGaXJlYmFzZU1lc3NhZ2luZyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nL21lc3NhZ2luZyc7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi91c2VyXCI7XHJcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tIFwiLi4vY29tcGFueVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBQcm9tb3Rpb257XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcGFueU5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvbW90aW9uc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9wcm9tb3Rpb25zLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFueVJlc3VsdCA9IG51bGw7XHJcbiAgICBjb21wYW55TmFtZXMgPSBbXTtcclxuICAgIGluZGV4Q29tcGFuaWVzID0gMDtcclxuICAgIHB1YmxpYyBwcm9tb3Rpb25zRm9yTGlzdDogQXJyYXk8UHJvbW90aW9uPjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyOiBVc2VyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBjb21wYW55OiBDb21wYW55KSB7XHJcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25zRm9yTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvcHJvbW90aW9ucy8nKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnlSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIHZhciBsZW5ndGhDb21wYW5pZXMgPSB0aGlzLmdldExlbmd0aENvbXBhbmllcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQ29tcGFuaWVzKGxlbmd0aENvbXBhbmllcyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKFwiRXJyb3JcIitlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5jb21wYW55LnNldENvbXBhbnlOYW1lKHRoaXMuY29tcGFueU5hbWVzW2FyZ3MuaW5kZXhdKTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlldy1wcm9tb3Rpb25zXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRMZW5ndGhDb21wYW5pZXMoKXtcclxuICAgICAgICB2YXIgbGVuZ3RoO1xyXG4gICAgICAgIGZvcih2YXIgaXRlbSBpbiB0aGlzLmNvbXBhbnlSZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBhbnlOYW1lcy5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICBsZW5ndGgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2hlY2tDb21wYW5pZXMobGVuZ3RoQ29tcGFuaWVzKXtcclxuICAgICAgICBpZih0aGlzLmluZGV4Q29tcGFuaWVzPGxlbmd0aENvbXBhbmllcyl7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0Q29tcGFuaWVzTmFtZXMobGVuZ3RoQ29tcGFuaWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgLy9hZGQgdG8gcHJvbW90aW9ucyBmb3IgbGlzdFxyXG4gICAgICAgICAgICAvLyB0aGlzLmNvbXBhbnlOYW1lc0ZpbmFsID0gdGhpcy5jb21wYW55TmFtZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbXBhbmllc05hbWVzKGxlbmd0aENvbXBhbmllcyl7XHJcbiAgICAgICAgdGhpcy5pbmRleENvbXBhbmllcysrO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==