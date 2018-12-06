"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var dialogs = require("tns-core-modules/ui/dialogs");
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
        dialogs.alert({
            title: "Successful",
            message: "Keychain card created!",
            okButtonText: "OK"
        }).then(function () {
            console.log("Dialog closed!");
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBQzdELHFEQUF1RDtBQUN2RCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBUW5FO0lBT0ksNkJBQW9CLGNBQThCLEVBQzlCLElBQVUsRUFDVixNQUFjO1FBRmQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGxDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFLdEIscURBQXFEO0lBQ3pELENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUFBLGlCQWVDO1FBZEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDckIsb0JBQW9CLEVBQUUsSUFBSTtZQUMxQixpQkFBaUIsRUFBRSxLQUFLO1lBQ3hCLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFVBQVUsRUFBRSxJQUFJO1lBQ2hCLE9BQU8sRUFBRSxLQUFLO1lBQ2QscUJBQXFCLEVBQUUsR0FBRztTQUM3QixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0RSxLQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7WUFDbkMsS0FBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ25DLENBQUMsRUFBRSxVQUFDLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2NBQ3ZGLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFdkUsUUFBUSxDQUFDLElBQUksQ0FDVCxTQUFTLEdBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsR0FBQyxZQUFZLEVBQzVDO1lBQ0ksTUFBTSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQzFCLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVztZQUN0QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBQ2xDLENBQ0osQ0FBQztRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNWLEtBQUssRUFBRSxZQUFZO1lBQ25CLE9BQU8sRUFBRSx3QkFBd0I7WUFDakMsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBN0RRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFlBQVk7WUFDdEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1lBQzFDLFdBQVcsRUFBRSw4QkFBOEI7U0FDOUMsQ0FBQztpREFRc0MsNENBQWM7WUFDeEIsV0FBSTtZQUNGLGVBQU07T0FUekIsbUJBQW1CLENBOEQvQjtJQUFELDBCQUFDO0NBQUEsQUE5REQsSUE4REM7QUE5RFksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNyZWF0ZUNhcmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtY2FyZC5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWNhcmQuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGJhcmNvZGVGb3JtYXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgYmFyY29kZURhdGE6IHN0cmluZyA9IFwiXCI7XG4gICAgY2FyZE5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgY2FyZExvY2F0aW9uOiBzdHJpbmcgPSBcIlwiO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2Rlc2Nhbm5lcjogQmFyY29kZVNjYW5uZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyOiBVc2VyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uU2NhbigpIHtcbiAgICAgICAgdGhpcy5iYXJjb2Rlc2Nhbm5lci5zY2FuKHtcbiAgICAgICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcbiAgICAgICAgICAgIHRvcmNoT246IGZhbHNlLFxuICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDBcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkZvcm1hdDogXCIgKyByZXN1bHQuZm9ybWF0ICsgXCIsXFxuQ29uZW50OiBcIiArIHJlc3VsdC50ZXh0KTtcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZUZvcm1hdCA9IHJlc3VsdC5mb3JtYXQ7XG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVEYXRhID0gcmVzdWx0LnRleHQ7XG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBzY2FubmluZyBcIiArIGVycm9yTWVzc2FnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUNhcmQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQ1JFQVRJTkcgQ0FSRC4uLlxcbkZvcm1hdDogXCIgKyB0aGlzLmJhcmNvZGVGb3JtYXQgKyBcIlxcbkRhdGE6IFwiICsgdGhpcy5iYXJjb2RlRGF0YVxuICAgICAgICAgICAgKyBcIlxcbk5hbWU6IFwiICsgdGhpcy5jYXJkTmFtZSArIFwiXFxuTG9jYXRpb246IFwiICsgdGhpcy5jYXJkTG9jYXRpb24pO1xuICAgICAgICBcbiAgICAgICAgZmlyZWJhc2UucHVzaChcbiAgICAgICAgICAgICcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMnLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEZvcm1hdDogdGhpcy5iYXJjb2RlRm9ybWF0LFxuICAgICAgICAgICAgICAgIERhdGE6IHRoaXMuYmFyY29kZURhdGEsXG4gICAgICAgICAgICAgICAgY2FyZE5hbWU6IHRoaXMuY2FyZE5hbWUsXG4gICAgICAgICAgICAgICAgY2FyZExvY2F0aW9uOiB0aGlzLmNhcmRMb2NhdGlvblxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICBjb25zb2xlLmxvZygnL3VzZXJzLycrdGhpcy51c2VyLmdldFVzZXJJZCgpKycvS2V5Y2hhaW5zJyk7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc2Z1bFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJLZXljaGFpbiBjYXJkIGNyZWF0ZWQhXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJkc1wiXSk7XG4gICAgfVxufVxuIl19