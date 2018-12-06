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
        this.companyPromotions = [[]];
        this.promotions = [[[]]];
        this.individualPromotion = [];
        this.companyResult = null;
        this.companyNames = [];
        this.companyNamesFinal = [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ25FLGdDQUE2QjtBQUM3QixzQ0FBcUM7QUFDckMsMENBQXlDO0FBRXpDO0lBQ0ksbUJBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUksQ0FBQztJQUMvQyxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFXSSw2QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixPQUFnQjtRQUZoQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFlBQU8sR0FBUCxPQUFPLENBQVM7UUFYcEMsc0JBQWlCLEdBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxlQUFVLEdBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLHdCQUFtQixHQUFhLEVBQUUsQ0FBQztRQUNuQyxrQkFBYSxHQUFHLElBQUksQ0FBQztRQUNyQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQUNsQixzQkFBaUIsR0FBRSxFQUFFLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFNZixJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1lBQzVCLElBQUksZUFBZSxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQ2hELEtBQUksQ0FBQyxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQztJQUM5QyxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLHVDQUFTLEdBQWhCLFVBQWlCLElBQUk7UUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsZ0RBQWtCLEdBQWxCO1FBQ0ksSUFBSSxNQUFNLENBQUM7UUFDWCxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7WUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsTUFBTSxFQUFFLENBQUM7UUFDYixDQUFDO1FBQ0QsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQsNENBQWMsR0FBZCxVQUFlLGVBQWU7UUFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBQyxlQUFlLENBQUMsQ0FBQSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCw0QkFBNEI7WUFDNUIsOENBQThDO1FBQ2xELENBQUM7SUFDTCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCLFVBQWtCLGVBQWU7UUFDN0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUE1RFEsbUJBQW1CO1FBTi9CLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsV0FBVyxFQUFFLDZCQUE2QjtTQUM3QyxDQUFDO2lEQVk4QixlQUFNO1lBQ1IsV0FBSTtZQUNELGlCQUFPO09BYjNCLG1CQUFtQixDQTZEL0I7SUFBRCwwQkFBQztDQUFBLEFBN0RELElBNkRDO0FBN0RZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGluaXRGaXJlYmFzZU1lc3NhZ2luZyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nL21lc3NhZ2luZyc7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi91c2VyXCI7XHJcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tIFwiLi4vY29tcGFueVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBQcm9tb3Rpb257XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcGFueU5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvbW90aW9uc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9wcm9tb3Rpb25zLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFueVByb21vdGlvbnM6IFtzdHJpbmdbXV0gPSBbW11dO1xyXG4gICAgcHJvbW90aW9uczogW1tzdHJpbmdbXV1dID0gW1tbXV1dO1xyXG4gICAgaW5kaXZpZHVhbFByb21vdGlvbjogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbXBhbnlSZXN1bHQgPSBudWxsO1xyXG4gICAgY29tcGFueU5hbWVzID0gW107XHJcbiAgICBjb21wYW55TmFtZXNGaW5hbCA9W107XHJcbiAgICBpbmRleENvbXBhbmllcyA9IDA7XHJcbiAgICBwdWJsaWMgcHJvbW90aW9uc0Zvckxpc3Q6IEFycmF5PFByb21vdGlvbj47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgY29tcGFueTogQ29tcGFueSkge1xyXG4gICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJylcclxuICAgICAgICAudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgdGhpcy5jb21wYW55UmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB2YXIgbGVuZ3RoQ29tcGFuaWVzID0gdGhpcy5nZXRMZW5ndGhDb21wYW5pZXMoKTtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0NvbXBhbmllcyhsZW5ndGhDb21wYW5pZXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhcIkVycm9yXCIrZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJJdGVtIFRhcHBlZCBhdCBjZWxsIGluZGV4OiBcIiArIGFyZ3MuaW5kZXgpO1xyXG4gICAgICAgIHRoaXMuY29tcGFueS5zZXRDb21wYW55TmFtZSh0aGlzLmNvbXBhbnlOYW1lc1thcmdzLmluZGV4XSk7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ZpZXctcHJvbW90aW9uc1wiXSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGVuZ3RoQ29tcGFuaWVzKCl7XHJcbiAgICAgICAgdmFyIGxlbmd0aDtcclxuICAgICAgICBmb3IodmFyIGl0ZW0gaW4gdGhpcy5jb21wYW55UmVzdWx0LnZhbHVlKXtcclxuICAgICAgICAgICAgdGhpcy5jb21wYW55TmFtZXMucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgbGVuZ3RoKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNoZWNrQ29tcGFuaWVzKGxlbmd0aENvbXBhbmllcyl7XHJcbiAgICAgICAgaWYodGhpcy5pbmRleENvbXBhbmllczxsZW5ndGhDb21wYW5pZXMpe1xyXG4gICAgICAgICAgICB0aGlzLmdldENvbXBhbmllc05hbWVzKGxlbmd0aENvbXBhbmllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIC8vYWRkIHRvIHByb21vdGlvbnMgZm9yIGxpc3RcclxuICAgICAgICAgICAgLy8gdGhpcy5jb21wYW55TmFtZXNGaW5hbCA9IHRoaXMuY29tcGFueU5hbWVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wYW5pZXNOYW1lcyhsZW5ndGhDb21wYW5pZXMpe1xyXG4gICAgICAgIHRoaXMuaW5kZXhDb21wYW5pZXMrKztcclxuICAgIH1cclxufVxyXG4iXX0=