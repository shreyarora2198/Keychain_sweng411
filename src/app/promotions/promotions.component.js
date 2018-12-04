"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var user_1 = require("../user");
var router_1 = require("@angular/router");
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent(router, user) {
        this.router = router;
        this.user = user;
        this.promotions = [[]];
        this.individualPromotion = [];
        // Use the component constructor to inject providers.
    }
    PromotionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        firebase.getValue('/promotions/' + this.user.getCompanyName())
            .then(function (result) {
            for (var item in result.value) {
                firebase.getValue('/promotions/' + _this.user.getCompanyName() + '/' + item)
                    .then(function (result) {
                    console.log(result);
                    // console.log("company name: "+this.user.getCompanyName());
                    _this.individualPromotion = [];
                    _this.individualPromotion.push(JSON.stringify(result.value.promoName));
                    _this.individualPromotion.push(JSON.stringify(result.value.promoDesc));
                    // console.log(JSON.stringify(result));
                    // console.log(JSON.stringify(result));
                    _this.promotions.push(_this.individualPromotion);
                });
            }
        })
            .catch(function (error) { return console.log("Error" + error); });
        setTimeout(function () {
            for (var i = 0; i < _this.promotions.length; i++) {
                for (var j = 0; j < _this.promotions[i].length; j++) {
                    console.log();
                    console.log("Keychain " + i + ": " + _this.promotions[i][j]);
                }
            }
        }, 500);
    };
    PromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    PromotionsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Promotions",
            moduleId: module.id,
            styleUrls: ["./promotions.component.css"],
            templateUrl: "./promotions.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, user_1.User])
    ], PromotionsComponent);
    return PromotionsComponent;
}());
exports.PromotionsComponent = PromotionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ25FLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFPekM7SUFHSSw2QkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFGdEQsZUFBVSxHQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUIsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBRS9CLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsc0NBQVEsR0FBUjtRQUFBLGlCQThCQztRQTdCRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUMzRCxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1QsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQzFCLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQztxQkFDcEUsSUFBSSxDQUFDLFVBQUEsTUFBTTtvQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUN4Qiw0REFBNEQ7b0JBQzVELEtBQUksQ0FBQyxtQkFBbUIsR0FBRSxFQUFFLENBQUM7b0JBQzdCLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7b0JBQ3RFLHVDQUF1QztvQkFDdkMsdUNBQXVDO29CQUN2QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxDQUNBLENBQUE7WUFDTCxDQUFDO1FBQ0wsQ0FBQyxDQUNBO2FBRUEsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtRQUN6QyxVQUFVLENBQUM7WUFDUCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUMsQ0FBQyxHQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFDLENBQUMsRUFBRSxFQUFDLENBQUM7Z0JBQ3pDLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFFLENBQUMsRUFBQyxDQUFDLEdBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxFQUFFLEVBQUMsQ0FBQztvQkFDMUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDO29CQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFDLENBQUMsR0FBQyxJQUFJLEdBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxRCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBMUNRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQztpREFJOEIsZUFBTSxFQUFnQixXQUFJO09BSDdDLG1CQUFtQixDQTJDL0I7SUFBRCwwQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGluaXRGaXJlYmFzZU1lc3NhZ2luZyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nL21lc3NhZ2luZyc7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJQcm9tb3Rpb25zXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL3Byb21vdGlvbnMuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vcHJvbW90aW9ucy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQcm9tb3Rpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHByb21vdGlvbnM6IFtzdHJpbmdbXV0gPSBbW11dO1xyXG4gICAgaW5kaXZpZHVhbFByb21vdGlvbjogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlcjogVXNlcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy9wcm9tb3Rpb25zLycrdGhpcy51c2VyLmdldENvbXBhbnlOYW1lKCkpXHJcbiAgICAgICAgLnRoZW4oKHJlc3VsdCk9PntcclxuICAgICAgICAgICAgZm9yKHZhciBpdGVtIGluIHJlc3VsdC52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJyt0aGlzLnVzZXIuZ2V0Q29tcGFueU5hbWUoKSsnLycraXRlbSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBhbnkgbmFtZTogXCIrdGhpcy51c2VyLmdldENvbXBhbnlOYW1lKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uID1bXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5wcm9tb05hbWUpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5wcm9tb0Rlc2MpKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21vdGlvbnMucHVzaCh0aGlzLmluZGl2aWR1YWxQcm9tb3Rpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC5jYXRjaChlcnJvcj0+Y29uc29sZS5sb2coXCJFcnJvclwiK2Vycm9yKSlcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTwgdGhpcy5wcm9tb3Rpb25zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0wO2o8dGhpcy5wcm9tb3Rpb25zW2ldLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLZXljaGFpbiBcIitpK1wiOiBcIit0aGlzLnByb21vdGlvbnNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19