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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBRW5DLDJFQUE2RDtBQUM3RCxnQ0FBK0I7QUFDL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFRbkU7SUFLSSxrQ0FBb0IsY0FBOEIsRUFDN0IsSUFBVTtRQURYLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM3QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBSi9CLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFXLEVBQUUsQ0FBQTtRQUlsQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELDJDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELG9EQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFHRCxrREFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUM7Y0FDM0MsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkQsUUFBUSxDQUFDLElBQUksQ0FDVCxhQUFhLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsRUFDeEM7WUFDSSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzVCLENBQ0osQ0FBQztJQUVOLENBQUM7SUEvQlEsd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7aURBTXNDLDRDQUFjO1lBQ3ZCLFdBQUk7T0FOdEIsd0JBQXdCLENBZ0NwQztJQUFELCtCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlclwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ3JlYXRlUHJvbW90aW9uXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1wcm9tb3Rpb24uY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVQcm9tb3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHByb21vTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByb21vRGVzYzogc3RyaW5nID0gXCJcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZXNjYW5uZXI6IEJhcmNvZGVTY2FubmVyXHJcbiAgICAgICAgICAgICAgICAscHJpdmF0ZSB1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNyZWF0ZVByb21vdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlxcbkNSRUFUSU5HIFBST01PVElPTi4uLlxcbk5hbWU6IFwiIFxyXG4gICAgICAgICsgdGhpcy5wcm9tb05hbWUgKyBcIlxcbkRlc2NyaXB0aW9uOiBcIiArIHRoaXMucHJvbW9EZXNjKTtcclxuICAgICAgICBmaXJlYmFzZS5wdXNoKFxyXG4gICAgICAgICAgICAncHJvbW90aW9ucy8nK3RoaXMudXNlci5nZXRDb21wYW55TmFtZSgpLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcm9tb05hbWU6IHRoaXMucHJvbW9OYW1lLFxyXG4gICAgICAgICAgICAgICAgcHJvbW9EZXNjOiB0aGlzLnByb21vRGVzY1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19