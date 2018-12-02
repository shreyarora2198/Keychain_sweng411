"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var CreatePromotionComponent = /** @class */ (function () {
    function CreatePromotionComponent(barcodescanner) {
        this.barcodescanner = barcodescanner;
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
        console.log("\nCREATING PROMOTION...\nName: " + this.promoName + "\nDescription: " + this.promoDesc);
    };
    CreatePromotionComponent = __decorate([
        core_1.Component({
            selector: "CreatePromotion",
            moduleId: module.id,
            styleUrls: ["./create-promotion.component.css"],
            templateUrl: "./create-promotion.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], CreatePromotionComponent);
    return CreatePromotionComponent;
}());
exports.CreatePromotionComponent = CreatePromotionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBUTdEO0lBS0ksa0NBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUhsRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLGNBQVMsR0FBVyxFQUFFLENBQUE7UUFHbEIscURBQXFEO0lBQ3pELENBQUM7SUFFRCwyQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCxvREFBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBR0Qsa0RBQWUsR0FBZjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7SUFDeEcsQ0FBQztJQXJCUSx3QkFBd0I7UUFOcEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO1lBQy9DLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FNc0MsNENBQWM7T0FMekMsd0JBQXdCLENBc0JwQztJQUFELCtCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksNERBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNyZWF0ZVByb21vdGlvblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1wcm9tb3Rpb24uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlUHJvbW90aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBwcm9tb05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcm9tb0Rlc2M6IHN0cmluZyA9IFwiXCJcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVzY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVQcm9tb3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5DUkVBVElORyBQUk9NT1RJT04uLi5cXG5OYW1lOiBcIiArIHRoaXMucHJvbW9OYW1lICsgXCJcXG5EZXNjcmlwdGlvbjogXCIgKyB0aGlzLnByb21vRGVzYylcclxuICAgIH1cclxufVxyXG4iXX0=