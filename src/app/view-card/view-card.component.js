"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var keychain_card_1 = require("../keychain-card");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var ViewCardComponent = /** @class */ (function () {
    function ViewCardComponent(keychaincardclass) {
        this.keychaincardclass = keychaincardclass;
        // Use the component constructor to inject providers.
        this.barcodeId = this.keychaincardclass.getBarcodeId();
        this.barcodeFormat = this.keychaincardclass.getBarcodeFormat();
        this.cardLoc = this.keychaincardclass.getCardLocation();
        this.cardName = this.keychaincardclass.getCardName();
    }
    ViewCardComponent.prototype.ngOnInit = function () {
        console.log(this.barcodeId);
        var barcodeImage = this.barcodeImg.nativeElement;
        var zx = new ZXing();
        var newImg = zx.createBarcode({
            encode: this.barcodeId,
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
        tslib_1.__metadata("design:paramtypes", [keychain_card_1.KeychainCardClass])
    ], ViewCardComponent);
    return ViewCardComponent;
}());
exports.ViewCardComponent = ViewCardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQXlFO0FBQ3pFLGlDQUFtQztBQUluQyxrREFBcUQ7QUFFckQsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBUzVDO0lBU0ksMkJBQW9CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BELHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN2RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQy9ELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pELENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDNUIsSUFBTSxZQUFZLEdBQVUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDMUQsSUFBTSxFQUFFLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDO1lBQzVCLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUztZQUN0QixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQSxRQUFRO1NBQzlCLENBQUMsQ0FBQztRQUNILFlBQVksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCw2Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBN0J3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzswQ0FBYSxpQkFBVTt5REFBQztJQUZ2QyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztZQUN4QyxXQUFXLEVBQUUsNEJBQTRCO1NBQzVDLENBQUM7aURBV3lDLGlDQUFpQjtPQVQvQyxpQkFBaUIsQ0FnQzdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBLZXljaGFpbkNhcmRDbGFzcyB9IGZyb20gXCIuLi9rZXljaGFpbi1jYXJkXCI7XG5cbmNvbnN0IFpYaW5nID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC16eGluZ1wiKTtcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiVmlld0NhcmRcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHN0eWxlVXJsczogW1wiLi92aWV3LWNhcmQuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3ZpZXctY2FyZC5jb21wb25lbnQuaHRtbFwiXG59KVxuXG5leHBvcnQgY2xhc3MgVmlld0NhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcblxuICAgIHByaXZhdGUgYmFyY29kZUlkOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBiYXJjb2RlRm9ybWF0OiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkTG9jOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjYXJkTmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBrZXljaGFpbmNhcmRjbGFzczogS2V5Y2hhaW5DYXJkQ2xhc3MpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICAgICAgdGhpcy5iYXJjb2RlSWQgPSB0aGlzLmtleWNoYWluY2FyZGNsYXNzLmdldEJhcmNvZGVJZCgpO1xuICAgICAgICB0aGlzLmJhcmNvZGVGb3JtYXQgPSB0aGlzLmtleWNoYWluY2FyZGNsYXNzLmdldEJhcmNvZGVGb3JtYXQoKTtcbiAgICAgICAgdGhpcy5jYXJkTG9jID0gdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5nZXRDYXJkTG9jYXRpb24oKTtcbiAgICAgICAgdGhpcy5jYXJkTmFtZSA9IHRoaXMua2V5Y2hhaW5jYXJkY2xhc3MuZ2V0Q2FyZE5hbWUoKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5iYXJjb2RlSWQpO1xuICAgICAgICBjb25zdCBiYXJjb2RlSW1hZ2UgPSA8SW1hZ2U+dGhpcy5iYXJjb2RlSW1nLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IHp4ID0gbmV3IFpYaW5nKCk7XG4gICAgICAgIGNvbnN0IG5ld0ltZyA9IHp4LmNyZWF0ZUJhcmNvZGUoe1xuICAgICAgICAgICAgZW5jb2RlOiB0aGlzLmJhcmNvZGVJZCwvL2RhdGFcbiAgICAgICAgICAgIGZvcm1hdDogWlhpbmcuVVBDX0EvL2Zvcm1hdFxuICAgICAgICB9KTtcbiAgICAgICAgYmFyY29kZUltYWdlLmltYWdlU291cmNlID0gSW1hZ2VTb3VyY2UuZnJvbU5hdGl2ZVNvdXJjZShuZXdJbWcpO1xuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn0iXX0=