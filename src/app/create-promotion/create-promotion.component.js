"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var CreatePromotionComponent = /** @class */ (function () {
    function CreatePromotionComponent(barcodescanner) {
        this.barcodescanner = barcodescanner;
        this.barcodeFormat = "";
        this.barcodeData = "";
        this.cardName = "";
        this.cardLocation = "";
        // Use the component constructor to inject providers.
    }
    CreatePromotionComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    CreatePromotionComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CreatePromotionComponent.prototype.onScan = function () {
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
    CreatePromotionComponent.prototype.createPromotion = function () {
        console.log("CREATING PROMOTION...\nFormat: " + this.barcodeFormat + "\nData: " + this.barcodeData
            + "\nName: " + this.cardName + "\nLocation: " + this.cardLocation);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxpQ0FBbUM7QUFFbkMsMkVBQTZEO0FBUTdEO0lBT0ksa0NBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUxsRCxrQkFBYSxHQUFXLEVBQUUsQ0FBQztRQUMzQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLGlCQUFZLEdBQVcsRUFBRSxDQUFDO1FBR3RCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsMkNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQsb0RBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVNLHlDQUFNLEdBQWI7UUFBQSxpQkFlQztRQWRHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDO1lBQ3JCLG9CQUFvQixFQUFFLElBQUk7WUFDMUIsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLHFCQUFxQixFQUFFLEdBQUc7U0FDN0IsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEUsS0FBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQyxZQUFZO1lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsR0FBRyxZQUFZLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrREFBZSxHQUFmO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVztjQUM1RixVQUFVLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO0lBQzFFLENBQUM7SUF4Q1Esd0JBQXdCO1FBTnBDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztZQUMvQyxXQUFXLEVBQUUsbUNBQW1DO1NBQ25ELENBQUM7eUNBUXNDLDRDQUFjO09BUHpDLHdCQUF3QixDQXlDcEM7SUFBRCwrQkFBQztDQUFBLEFBekNELElBeUNDO0FBekNZLDREQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1iYXJjb2Rlc2Nhbm5lclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDcmVhdGVQcm9tb3Rpb25cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY3JlYXRlLXByb21vdGlvbi5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jcmVhdGUtcHJvbW90aW9uLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb21vdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgYmFyY29kZUZvcm1hdDogc3RyaW5nID0gXCJcIjtcclxuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgY2FyZE5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBjYXJkTG9jYXRpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBiYXJjb2Rlc2Nhbm5lcjogQmFyY29kZVNjYW5uZXIpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25TY2FuKCkge1xyXG4gICAgICAgIHRoaXMuYmFyY29kZXNjYW5uZXIuc2Nhbih7XHJcbiAgICAgICAgICAgIHNob3dGbGlwQ2FtZXJhQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmVmZXJGcm9udENhbWVyYTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dUb3JjaEJ1dHRvbjogdHJ1ZSxcclxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcclxuICAgICAgICAgICAgdG9yY2hPbjogZmFsc2UsXHJcbiAgICAgICAgICAgIHJlc3VsdERpc3BsYXlEdXJhdGlvbjogNTAwXHJcbiAgICAgICAgfSkudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRm9ybWF0OiBcIiArIHJlc3VsdC5mb3JtYXQgKyBcIixcXG5Db25lbnQ6IFwiICsgcmVzdWx0LnRleHQpO1xyXG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVGb3JtYXQgPSByZXN1bHQuZm9ybWF0O1xyXG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVEYXRhID0gcmVzdWx0LnRleHQ7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoZW4gc2Nhbm5pbmcgXCIgKyBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVByb21vdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkNSRUFUSU5HIFBST01PVElPTi4uLlxcbkZvcm1hdDogXCIgKyB0aGlzLmJhcmNvZGVGb3JtYXQgKyBcIlxcbkRhdGE6IFwiICsgdGhpcy5iYXJjb2RlRGF0YVxyXG4gICAgICAgICAgICArIFwiXFxuTmFtZTogXCIgKyB0aGlzLmNhcmROYW1lICsgXCJcXG5Mb2NhdGlvbjogXCIgKyB0aGlzLmNhcmRMb2NhdGlvbilcclxuICAgIH1cclxufVxyXG4iXX0=