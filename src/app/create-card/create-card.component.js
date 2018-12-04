"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var user_1 = require("../user");
var router_1 = require("@angular/router");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent(barcodescanner, user, router) {
        this.barcodescanner = barcodescanner;
        this.user = user;
        this.router = router;
        this.barcodeFormat = "";
        this.barcodeData = "";
        this.cardName = "";
        this.cardLocation = "";
        // Use the component constructor to inject providers.
    }
    CreateCardComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    CreateCardComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CreateCardComponent.prototype.onScan = function () {
        var _this = this;
        this.barcodescanner.scan({
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500
        }).then(function (result) {
            console.log("Format: " + result.format + ",\nConent: " + result.text);
            _this.barcodeFormat = result.format;
            _this.barcodeData = result.text;
        }, function (errorMessage) {
            console.log("Error when scanning " + errorMessage);
        });
    };
    CreateCardComponent.prototype.createCard = function () {
        console.log("CREATING CARD...\nFormat: " + this.barcodeFormat + "\nData: " + this.barcodeData
            + "\nName: " + this.cardName + "\nLocation: " + this.cardLocation);
        firebase.push('/users/' + this.user.getUserId() + '/Keychains', {
            Format: this.barcodeFormat,
            Data: this.barcodeData,
            cardName: this.cardName,
            cardLocation: this.cardLocation
        });
        console.log('/users/' + this.user.getUserId() + '/Keychains');
        this.router.navigate(["/cards"]);
    };
    CreateCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "CreateCard",
            moduleId: module.id,
            styleUrls: ["./create-card.component.css"],
            templateUrl: "./create-card.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner,
            user_1.User,
            router_1.Router])
    ], CreateCardComponent);
    return CreateCardComponent;
}());
exports.CreateCardComponent = CreateCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBRTdELGdDQUErQjtBQUMvQiwwQ0FBeUM7QUFFekMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFRbkU7SUFPSSw2QkFBb0IsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLE1BQWM7UUFGZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFQbEMsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixpQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUt0QixxREFBcUQ7SUFDekQsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELCtDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxvQ0FBTSxHQUFiO1FBQUEsaUJBZUM7UUFkRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxxQkFBcUIsRUFBRSxHQUFHO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxhQUFhLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RFLEtBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztZQUNuQyxLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDbkMsQ0FBQyxFQUFFLFVBQUMsWUFBWTtZQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEdBQUcsWUFBWSxDQUFDLENBQUM7UUFDdkQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQVUsR0FBVjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVc7Y0FDdkYsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsY0FBYyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RSxRQUFRLENBQUMsSUFBSSxDQUNULFNBQVMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLFlBQVksRUFDNUM7WUFDSSxNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDMUIsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDbEMsQ0FDSixDQUFDO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBQyxZQUFZLENBQUMsQ0FBQztRQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQXZEUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7aURBUXNDLDRDQUFjO1lBQ3hCLFdBQUk7WUFDRixlQUFNO09BVHpCLG1CQUFtQixDQXdEL0I7SUFBRCwwQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJDcmVhdGVDYXJkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLWNhcmQuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1jYXJkLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBiYXJjb2RlRm9ybWF0OiBzdHJpbmcgPSBcIlwiO1xuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNhcmROYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNhcmRMb2NhdGlvbjogc3RyaW5nID0gXCJcIjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFyY29kZXNjYW5uZXI6IEJhcmNvZGVTY2FubmVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvblNjYW4oKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZXNjYW5uZXIuc2Nhbih7XG4gICAgICAgICAgICBzaG93RmxpcENhbWVyYUJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIGJlZXBPblNjYW46IHRydWUsXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwXG4gICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcbkNvbmVudDogXCIgKyByZXN1bHQudGV4dCk7XG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVGb3JtYXQgPSByZXN1bHQuZm9ybWF0O1xuICAgICAgICAgICAgdGhpcy5iYXJjb2RlRGF0YSA9IHJlc3VsdC50ZXh0O1xuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gc2Nhbm5pbmcgXCIgKyBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDYXJkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFUSU5HIENBUkQuLi5cXG5Gb3JtYXQ6IFwiICsgdGhpcy5iYXJjb2RlRm9ybWF0ICsgXCJcXG5EYXRhOiBcIiArIHRoaXMuYmFyY29kZURhdGFcbiAgICAgICAgICAgICsgXCJcXG5OYW1lOiBcIiArIHRoaXMuY2FyZE5hbWUgKyBcIlxcbkxvY2F0aW9uOiBcIiArIHRoaXMuY2FyZExvY2F0aW9uKTtcbiAgICAgICAgXG4gICAgICAgIGZpcmViYXNlLnB1c2goXG4gICAgICAgICAgICAnL3VzZXJzLycrdGhpcy51c2VyLmdldFVzZXJJZCgpKycvS2V5Y2hhaW5zJyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBGb3JtYXQ6IHRoaXMuYmFyY29kZUZvcm1hdCxcbiAgICAgICAgICAgICAgICBEYXRhOiB0aGlzLmJhcmNvZGVEYXRhLFxuICAgICAgICAgICAgICAgIGNhcmROYW1lOiB0aGlzLmNhcmROYW1lLFxuICAgICAgICAgICAgICAgIGNhcmRMb2NhdGlvbjogdGhpcy5jYXJkTG9jYXRpb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgY29uc29sZS5sb2coJy91c2Vycy8nK3RoaXMudXNlci5nZXRVc2VySWQoKSsnL0tleWNoYWlucycpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhcmRzXCJdKTtcbiAgICB9XG59XG4iXX0=