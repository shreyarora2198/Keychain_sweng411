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
var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent(barcodescanner, user, router) {
        this.barcodescanner = barcodescanner;
        this.user = user;
        this.router = router;
        this.barcodeFormat = "";
        this.barcodeData = "";
        this.cardName = "";
        this.cardLocation = "";
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
            _this.barcodeFormat = result.format;
            _this.barcodeData = result.text;
        }, function (errorMessage) {
            alert("Error: " + errorMessage);
        });
    };
    CreateCardComponent.prototype.createCard = function () {
        var _this = this;
        firebase.push('/users/' + this.user.getUserId() + '/Keychains', {
            Format: this.barcodeFormat,
            Data: this.barcodeData,
            cardName: this.cardName,
            cardLocation: this.cardLocation
        });
        dialogs.alert({
            title: "Successful",
            message: "Keychain card created!",
            okButtonText: "OK"
        }).then(function () {
            _this.router.navigate(["/cards"]);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBQzdELHFEQUF1RDtBQUN2RCxnQ0FBK0I7QUFDL0IsMENBQXlDO0FBRXpDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBUXpEO0lBT0ksNkJBQW9CLGNBQThCLEVBQzlCLElBQVUsRUFDVixNQUFjO1FBRmQsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUGxDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7SUFLMUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELCtDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFTSxvQ0FBTSxHQUFiO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixvQkFBb0IsRUFBRSxJQUFJO1lBQzFCLGlCQUFpQixFQUFFLEtBQUs7WUFDeEIsZUFBZSxFQUFFLElBQUk7WUFDckIsVUFBVSxFQUFFLElBQUk7WUFDaEIsT0FBTyxFQUFFLEtBQUs7WUFDZCxxQkFBcUIsRUFBRSxHQUFHO1NBQzdCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ1osS0FBSyxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCx3Q0FBVSxHQUFWO1FBQUEsaUJBa0JDO1FBakJHLFFBQVEsQ0FBQyxJQUFJLENBQ1QsU0FBUyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUMsWUFBWSxFQUM1QztZQUNJLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYTtZQUMxQixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDdEIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNsQyxDQUNKLENBQUM7UUFDRixPQUFPLENBQUMsS0FBSyxDQUFDO1lBQ1YsS0FBSyxFQUFFLFlBQVk7WUFDbkIsT0FBTyxFQUFFLHdCQUF3QjtZQUNqQyxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBRXJDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXZEUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7aURBUXNDLDRDQUFjO1lBQ3hCLFdBQUk7WUFDRixlQUFNO09BVHpCLG1CQUFtQixDQXdEL0I7SUFBRCwwQkFBQztDQUFBLEFBeERELElBd0RDO0FBeERZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ3JlYXRlQ2FyZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NyZWF0ZS1jYXJkLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtY2FyZC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgYmFyY29kZUZvcm1hdDogc3RyaW5nID0gXCJcIjtcbiAgICBiYXJjb2RlRGF0YTogc3RyaW5nID0gXCJcIjtcbiAgICBjYXJkTmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBjYXJkTG9jYXRpb246IHN0cmluZyA9IFwiXCI7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVzY2FubmVyOiBCYXJjb2RlU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25TY2FuKCkge1xuICAgICAgICB0aGlzLmJhcmNvZGVzY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXG4gICAgICAgICAgICBzaG93VG9yY2hCdXR0b246IHRydWUsXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246IDUwMFxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZUZvcm1hdCA9IHJlc3VsdC5mb3JtYXQ7XG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVEYXRhID0gcmVzdWx0LnRleHQ7XG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyb3I6IFwiICsgZXJyb3JNZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ2FyZCgpIHsgICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5wdXNoKFxuICAgICAgICAgICAgJy91c2Vycy8nK3RoaXMudXNlci5nZXRVc2VySWQoKSsnL0tleWNoYWlucycsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRm9ybWF0OiB0aGlzLmJhcmNvZGVGb3JtYXQsXG4gICAgICAgICAgICAgICAgRGF0YTogdGhpcy5iYXJjb2RlRGF0YSxcbiAgICAgICAgICAgICAgICBjYXJkTmFtZTogdGhpcy5jYXJkTmFtZSxcbiAgICAgICAgICAgICAgICBjYXJkTG9jYXRpb246IHRoaXMuY2FyZExvY2F0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IFwiU3VjY2Vzc2Z1bFwiLFxuICAgICAgICAgICAgbWVzc2FnZTogXCJLZXljaGFpbiBjYXJkIGNyZWF0ZWQhXCIsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJkc1wiXSk7XG5cbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=