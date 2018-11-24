"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var CreateCardComponent = /** @class */ (function () {
    function CreateCardComponent(barcodescanner) {
        this.barcodescanner = barcodescanner;
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
            formats: "QR_CODE, EAN_13",
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
            // dialogs.alert({
            //     title: "You Scanned ",
            //     message: "Format: " + result.format + ",\nConent: " + result.text,
            //     okButtonText: "OK"
            // });
        }, function (errorMessage) {
            console.log("Error when scanning " + errorMessage);
        });
    };
    CreateCardComponent.prototype.createCard = function () {
        console.log("CREATING CARD...\nFormat: " + this.barcodeFormat + "\nData: " + this.barcodeData
            + "\nName: " + this.cardName + "\nLocation: " + this.cardLocation);
    };
    CreateCardComponent = __decorate([
        core_1.Component({
            selector: "CreateCard",
            moduleId: module.id,
            styleUrls: ["./create-card.component.css"],
            templateUrl: "./create-card.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_barcodescanner_1.BarcodeScanner])
    ], CreateCardComponent);
    return CreateCardComponent;
}());
exports.CreateCardComponent = CreateCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQUVuQywyRUFBNkQ7QUFTN0Q7SUFPSSw2QkFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBTGxELGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsaUJBQVksR0FBVyxFQUFFLENBQUM7UUFHdEIscURBQXFEO0lBQ3pELENBQUM7SUFFRCxzQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCwrQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU0sb0NBQU0sR0FBYjtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQztZQUNyQixPQUFPLEVBQUUsaUJBQWlCO1lBQzFCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLHFCQUFxQixFQUFFLEdBQUc7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUMvQixrQkFBa0I7WUFDbEIsNkJBQTZCO1lBQzdCLHlFQUF5RTtZQUN6RSx5QkFBeUI7WUFDekIsTUFBTTtRQUNWLENBQUMsRUFBRSxVQUFDLFlBQVk7WUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixHQUFHLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHdDQUFVLEdBQVY7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXO2NBQ3ZGLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxHQUFHLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQTlDUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQztZQUMxQyxXQUFXLEVBQUUsOEJBQThCO1NBQzlDLENBQUM7eUNBUXNDLDRDQUFjO09BUHpDLG1CQUFtQixDQStDL0I7SUFBRCwwQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xyXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ3JlYXRlQ2FyZFwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9jcmVhdGUtY2FyZC5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtY2FyZC5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGVDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBiYXJjb2RlRm9ybWF0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYmFyY29kZURhdGE6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjYXJkTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIGNhcmRMb2NhdGlvbjogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVzY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblNjYW4oKSB7XHJcbiAgICAgICAgdGhpcy5iYXJjb2Rlc2Nhbm5lci5zY2FuKHtcclxuICAgICAgICAgICAgZm9ybWF0czogXCJRUl9DT0RFLCBFQU5fMTNcIixcclxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IHRydWUsXHJcbiAgICAgICAgICAgIHByZWZlckZyb250Q2FtZXJhOiBmYWxzZSxcclxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBiZWVwT25TY2FuOiB0cnVlLFxyXG4gICAgICAgICAgICB0b3JjaE9uOiBmYWxzZSxcclxuICAgICAgICAgICAgcmVzdWx0RGlzcGxheUR1cmF0aW9uOiA1MDBcclxuICAgICAgICB9KS50aGVuKChyZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcbkNvbmVudDogXCIgKyByZXN1bHQudGV4dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZUZvcm1hdCA9IHJlc3VsdC5mb3JtYXQ7XHJcbiAgICAgICAgICAgIHRoaXMuYmFyY29kZURhdGEgPSByZXN1bHQudGV4dDtcclxuICAgICAgICAgICAgLy8gZGlhbG9ncy5hbGVydCh7XHJcbiAgICAgICAgICAgIC8vICAgICB0aXRsZTogXCJZb3UgU2Nhbm5lZCBcIixcclxuICAgICAgICAgICAgLy8gICAgIG1lc3NhZ2U6IFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixcXG5Db25lbnQ6IFwiICsgcmVzdWx0LnRleHQsXHJcbiAgICAgICAgICAgIC8vICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3Igd2hlbiBzY2FubmluZyBcIiArIGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2FyZCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFUSU5HIENBUkQuLi5cXG5Gb3JtYXQ6IFwiICsgdGhpcy5iYXJjb2RlRm9ybWF0ICsgXCJcXG5EYXRhOiBcIiArIHRoaXMuYmFyY29kZURhdGFcclxuICAgICAgICAgICAgKyBcIlxcbk5hbWU6IFwiICsgdGhpcy5jYXJkTmFtZSArIFwiXFxuTG9jYXRpb246IFwiICsgdGhpcy5jYXJkTG9jYXRpb24pXHJcbiAgICB9XHJcbn1cclxuIl19