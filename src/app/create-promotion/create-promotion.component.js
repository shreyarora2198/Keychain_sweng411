"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var user_1 = require("../user");
var router_1 = require("@angular/router");
var dialogs = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var CreatePromotionComponent = /** @class */ (function () {
    function CreatePromotionComponent(user, router) {
        this.user = user;
        this.router = router;
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
        dialogs.alert({
            title: "Successful",
            message: "Promotion published!",
            okButtonText: "OK"
        }).then(function () {
            console.log("Dialog closed!");
        });
        this.router.navigate(["/promotions"]);
    };
    CreatePromotionComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "CreatePromotion",
            moduleId: module.id,
            styleUrls: ["./create-promotion.component.css"],
            templateUrl: "./create-promotion.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [user_1.User,
            router_1.Router])
    ], CreatePromotionComponent);
    return CreatePromotionComponent;
}());
exports.CreatePromotionComponent = CreatePromotionComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFDekMscURBQXVEO0FBQ3ZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBUW5FO0lBS0ksa0NBQW9CLElBQVUsRUFDVixNQUFjO1FBRGQsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUN2QixjQUFTLEdBQVcsRUFBRSxDQUFBO1FBSWxCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUdELGtEQUFlLEdBQWY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQztjQUMzQyxJQUFJLENBQUMsU0FBUyxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2RCxRQUFRLENBQUMsSUFBSSxDQUNULGFBQWEsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxFQUN4QztZQUNJLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSxzQkFBc0I7WUFDL0IsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBdENRLHdCQUF3QjtRQU5wQyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7WUFDL0MsV0FBVyxFQUFFLG1DQUFtQztTQUNuRCxDQUFDO2lEQU00QixXQUFJO1lBQ0YsZUFBTTtPQU56Qix3QkFBd0IsQ0F1Q3BDO0lBQUQsK0JBQUM7Q0FBQSxBQXZDRCxJQXVDQztBQXZDWSw0REFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDcmVhdGVQcm9tb3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb21vdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgcHJvbW9OYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJvbW9EZXNjOiBzdHJpbmcgPSBcIlwiXHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyOiBVc2VyLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjcmVhdGVQcm9tb3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJcXG5DUkVBVElORyBQUk9NT1RJT04uLi5cXG5OYW1lOiBcIiBcclxuICAgICAgICArIHRoaXMucHJvbW9OYW1lICsgXCJcXG5EZXNjcmlwdGlvbjogXCIgKyB0aGlzLnByb21vRGVzYyk7XHJcbiAgICAgICAgZmlyZWJhc2UucHVzaChcclxuICAgICAgICAgICAgJ3Byb21vdGlvbnMvJyt0aGlzLnVzZXIuZ2V0Q29tcGFueU5hbWUoKSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJvbW9OYW1lOiB0aGlzLnByb21vTmFtZSxcclxuICAgICAgICAgICAgICAgIHByb21vRGVzYzogdGhpcy5wcm9tb0Rlc2NcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlN1Y2Nlc3NmdWxcIixcclxuICAgICAgICAgICAgbWVzc2FnZTogXCJQcm9tb3Rpb24gcHVibGlzaGVkIVwiLFxyXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkRpYWxvZyBjbG9zZWQhXCIpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3Byb21vdGlvbnNcIl0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==