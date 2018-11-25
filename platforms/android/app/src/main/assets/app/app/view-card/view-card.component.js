"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var ViewCardComponent = /** @class */ (function () {
    function ViewCardComponent() {
        this.barcodeText = "036000291452";
        // Use the component constructor to inject providers.
    }
    ViewCardComponent.prototype.ngOnInit = function () {
        var barcodeImage = this.barcodeImg.nativeElement;
        var zx = new ZXing();
        var newImg = zx.createBarcode({
            encode: this.barcodeText,
            format: ZXing.UPC_A
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    };
    ViewCardComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    __decorate([
        core_1.ViewChild("barcodeImg"),
        __metadata("design:type", core_1.ElementRef)
    ], ViewCardComponent.prototype, "barcodeImg", void 0);
    ViewCardComponent = __decorate([
        core_1.Component({
            selector: "ViewCard",
            moduleId: module.id,
            styleUrls: ["./view-card.component.css"],
            templateUrl: "./view-card.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], ViewCardComponent);
    return ViewCardComponent;
}());
exports.ViewCardComponent = ViewCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUU7QUFDekUsaUNBQW1DO0FBS25DLElBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBQzVDLElBQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztBQVM1QztJQUtJO1FBRkEsZ0JBQVcsR0FBQyxjQUFjLENBQUM7UUFHdkIscURBQXFEO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksSUFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsV0FBVztZQUN4QixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUs7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsWUFBWSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVELDZDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFwQndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDO2tDQUFhLGlCQUFVO3lEQUFDO0lBRnZDLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1lBQ3hDLFdBQVcsRUFBRSw0QkFBNEI7U0FDNUMsQ0FBQzs7T0FFVyxpQkFBaUIsQ0F1QjdCO0lBQUQsd0JBQUM7Q0FBQSxBQXZCRCxJQXVCQztBQXZCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5cbmNvbnN0IFpYaW5nID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC16eGluZ1wiKTtcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmlld0NhcmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi92aWV3LWNhcmQuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXctY2FyZC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgVmlld0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcbiAgICBiYXJjb2RlVGV4dD1cIjAzNjAwMDI5MTQ1MlwiO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGJhcmNvZGVJbWFnZSA9IDxJbWFnZT50aGlzLmJhcmNvZGVJbWcubmF0aXZlRWxlbWVudDtcbiAgICAgICAgY29uc3QgenggPSBuZXcgWlhpbmcoKTtcbiAgICAgICAgY29uc3QgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7XG4gICAgICAgICAgICBlbmNvZGU6IHRoaXMuYmFyY29kZVRleHQsXG4gICAgICAgICAgICBmb3JtYXQ6IFpYaW5nLlVQQ19BXG4gICAgICAgIH0pO1xuICAgICAgICBiYXJjb2RlSW1hZ2UuaW1hZ2VTb3VyY2UgPSBJbWFnZVNvdXJjZS5mcm9tTmF0aXZlU291cmNlKG5ld0ltZyk7XG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxufSJdfQ==