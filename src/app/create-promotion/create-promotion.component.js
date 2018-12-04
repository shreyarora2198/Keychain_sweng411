"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var user_1 = require("../user");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var CreatePromotionComponent = /** @class */ (function () {
    function CreatePromotionComponent(barcodescanner, user) {
        this.barcodescanner = barcodescanner;
        this.user = user;
        this.promoName = "";
        this.promoDesc = "";
        // Use the component constructor to inject providers.
    }
    CreatePromotionComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    CreatePromotionComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CreatePromotionComponent.prototype.createPromotion = function () {
        console.log("\nCREATING PROMOTION...\nName: "
            + this.promoName + "\nDescription: " + this.promoDesc);
        firebase.push('promotions/' + this.user.getCompanyName(), {
            promoName: this.promoName,
            promoDesc: this.promoDesc
        });
    };
    CreatePromotionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "CreatePromotion",
            moduleId: module.id,
            styleUrls: ["./create-promotion.component.css"],
            templateUrl: "./create-promotion.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            user_1.User])
    ], CreatePromotionComponent);
    return CreatePromotionComponent;
}());
exports.CreatePromotionComponent = CreatePromotionComponent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBRW5DLDJFQUE2RDtBQVE3RDtJQUtJLGtDQUFvQixjQUE4QjtRQUE5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFIbEQsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFBO1FBR2xCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELGtEQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBQ3hHLENBQUM7SUFyQlEsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7aURBTXNDLDRDQUFjO09BTHpDLHdCQUF3QixDQXNCcEM7SUFBRCwrQkFBQztDQUFBLEFBdEJELElBc0JDO0FBdEJZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDcmVhdGVQcm9tb3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb21vdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJvbW9OYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJvbW9EZXNjOiBzdHJpbmcgPSBcIlwiXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2Rlc2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgY3JlYXRlUHJvbW90aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiXFxuQ1JFQVRJTkcgUFJPTU9USU9OLi4uXFxuTmFtZTogXCIgKyB0aGlzLnByb21vTmFtZSArIFwiXFxuRGVzY3JpcHRpb246IFwiICsgdGhpcy5wcm9tb0Rlc2MpXHJcbiAgICB9XHJcbn1cclxuIl19

