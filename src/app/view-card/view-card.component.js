"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var ViewCardComponent = /** @class */ (function () {
    function ViewCardComponent() {
        this.barcodeText = "036000291452"; //data
        // Use the component constructor to inject providers.
    }
    ViewCardComponent.prototype.ngOnInit = function () {
        var barcodeImage = this.barcodeImg.nativeElement;
        var zx = new ZXing();
        var newImg = zx.createBarcode({
            encode: this.barcodeText,
            format: ZXing.UPC_A //format
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    };
    ViewCardComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    tslib_1.__decorate([
        core_1.ViewChild("barcodeImg"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], ViewCardComponent.prototype, "barcodeImg", void 0);
    ViewCardComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ViewCard",
            moduleId: module.id,
            styleUrls: ["./view-card.component.css"],
            templateUrl: "./view-card.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ViewCardComponent);
    return ViewCardComponent;
}());
exports.ViewCardComponent = ViewCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlFO0FBQ3pFLGlDQUFtQztBQUtuQyxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFTNUM7SUFLSTtRQUZBLGdCQUFXLEdBQUMsY0FBYyxDQUFDLENBQUEsTUFBTTtRQUc3QixxREFBcUQ7SUFDekQsQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDSSxJQUFNLFlBQVksR0FBVSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUMxRCxJQUFNLEVBQUUsR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ3ZCLElBQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDNUIsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQ3hCLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFBLFFBQVE7U0FDOUIsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFwQndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzBDQUFhLGlCQUFVO3lEQUFDO0lBRnZDLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7T0FFVyxpQkFBaUIsQ0F1QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbmNvbnN0IFpYaW5nID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC16eGluZ1wiKTtcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmlld0NhcmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi92aWV3LWNhcmQuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXctY2FyZC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgVmlld0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcbiAgICBiYXJjb2RlVGV4dD1cIjAzNjAwMDI5MTQ1MlwiOy8vZGF0YVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVJbWFnZSA9IDxJbWFnZT50aGlzLmJhcmNvZGVJbWcubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgenggPSBuZXcgWlhpbmcoKTtcbiAgICAgICAgY29uc3QgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7XG4gICAgICAgICAgICBlbmNvZGU6IHRoaXMuYmFyY29kZVRleHQsLy9kYXRhXG4gICAgICAgICAgICBmb3JtYXQ6IFpYaW5nLlVQQ19BLy9mb3JtYXRcbiAgICAgICAgfSk7XG4gICAgICAgIGJhcmNvZGVJbWFnZS5pbWFnZVNvdXJjZSA9IEltYWdlU291cmNlLmZyb21OYXRpdmVTb3VyY2UobmV3SW1nKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG59Il19