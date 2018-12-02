"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.barcodeText = "036000291452";
        // Use the component constructor to inject providers.
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CardsComponent.prototype.generateBarcode = function () {
        var barcodeImage = this.barcodeImg.nativeElement;
        var zx = new ZXing();
        var newImg = zx.createBarcode({
            encode: this.barcodeText,
            format: ZXing.UPC_A
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    };
    __decorate([
        core_1.ViewChild("barcodeImg"),
        __metadata("design:type", core_1.ElementRef)
    ], CardsComponent.prototype, "barcodeImg", void 0);
    CardsComponent = __decorate([
        core_1.Component({
            selector: "Cards",
            moduleId: module.id,
            styleUrls: ["./cards.component.css"],
            templateUrl: "./cards.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLGlDQUFtQztBQUtuQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUM7SUFLSTtRQUZBLGdCQUFXLEdBQUMsY0FBYyxDQUFDO1FBR3ZCLHFEQUFxRDtJQUN6RCxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsd0NBQWUsR0FBZjtRQUNJLElBQU0sWUFBWSxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzFELElBQU0sRUFBRSxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7UUFDdkIsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDeEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxLQUFLO1NBQ3RCLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUF4QndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3NEQUFDO0lBRnZDLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7O09BRVcsY0FBYyxDQTJCMUI7SUFBRCxxQkFBQztDQUFBLEFBM0JELElBMkJDO0FBM0JZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcblxyXG5jb25zdCBaWGluZyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtenhpbmdcIik7XHJcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ2FyZHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyZHMuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FyZHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiYmFyY29kZUltZ1wiKSBiYXJjb2RlSW1nOiBFbGVtZW50UmVmO1xyXG4gICAgYmFyY29kZVRleHQ9XCIwMzYwMDAyOTE0NTJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZUJhcmNvZGUoKSB7XHJcbiAgICAgICAgY29uc3QgYmFyY29kZUltYWdlID0gPEltYWdlPnRoaXMuYmFyY29kZUltZy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IHp4ID0gbmV3IFpYaW5nKCk7XHJcbiAgICAgICAgY29uc3QgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7XHJcbiAgICAgICAgICAgIGVuY29kZTogdGhpcy5iYXJjb2RlVGV4dCxcclxuICAgICAgICAgICAgZm9ybWF0OiBaWGluZy5VUENfQVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJhcmNvZGVJbWFnZS5pbWFnZVNvdXJjZSA9IEltYWdlU291cmNlLmZyb21OYXRpdmVTb3VyY2UobmV3SW1nKTtcclxuICAgIH1cclxufSJdfQ==