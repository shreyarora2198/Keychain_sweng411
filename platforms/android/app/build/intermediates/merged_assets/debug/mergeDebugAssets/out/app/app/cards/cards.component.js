"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("application");
var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.ZXing = require('nativescript-zxing');
        this.zx = new this.ZXing();
        // Use the component constructor to inject providers.
    }
    CardsComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
        var barcodeID = "5901234123457";
        var barcodeFormat = "UPC_A";
        var img = this.zx.createBarcode({ encode: barcodeID, height: 100, width: 100, format: this.ZXing.UPC_A });
    };
    CardsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CardsComponent.prototype.createBarcode = function () {
        // let barcodeID = "5901234123457";
        // let barcodeFormat = "UPC_A"
        // var img = this.zx.createBarcode({encode: barcodeID, height: 100, width: 100, format: barcodeFormat})
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELGlDQUFtQztBQVNuQztJQUtJO1FBSEEsVUFBSyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RDLE9BQUUsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUdsQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxTQUFTLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksYUFBYSxHQUFHLE9BQU8sQ0FBQTtRQUMzQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBQyxDQUFDLENBQUE7SUFDM0csQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0ksbUNBQW1DO1FBQ25DLDhCQUE4QjtRQUM5Qix1R0FBdUc7SUFDM0csQ0FBQztJQXpCUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDOztPQUNXLGNBQWMsQ0EwQjFCO0lBQUQscUJBQUM7Q0FBQSxBQTFCRCxJQTBCQztBQTFCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkNhcmRzXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2NhcmRzLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmRzLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBaWGluZyA9IHJlcXVpcmUoJ25hdGl2ZXNjcmlwdC16eGluZycpO1xyXG4gICAgenggPSBuZXcgdGhpcy5aWGluZygpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgICAgbGV0IGJhcmNvZGVJRCA9IFwiNTkwMTIzNDEyMzQ1N1wiO1xyXG4gICAgICAgIGxldCBiYXJjb2RlRm9ybWF0ID0gXCJVUENfQVwiXHJcbiAgICAgICAgdmFyIGltZyA9IHRoaXMuenguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiBiYXJjb2RlSUQsIGhlaWdodDogMTAwLCB3aWR0aDogMTAwLCBmb3JtYXQ6IHRoaXMuWlhpbmcuVVBDX0F9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCYXJjb2RlKC8qYmFyY29kZUlEOiBTdHJpbmcsIGJhcmNvZGVGb3JtYXQ6IFN0cmluZyovKSB7XHJcbiAgICAgICAgLy8gbGV0IGJhcmNvZGVJRCA9IFwiNTkwMTIzNDEyMzQ1N1wiO1xyXG4gICAgICAgIC8vIGxldCBiYXJjb2RlRm9ybWF0ID0gXCJVUENfQVwiXHJcbiAgICAgICAgLy8gdmFyIGltZyA9IHRoaXMuenguY3JlYXRlQmFyY29kZSh7ZW5jb2RlOiBiYXJjb2RlSUQsIGhlaWdodDogMTAwLCB3aWR0aDogMTAwLCBmb3JtYXQ6IGJhcmNvZGVGb3JtYXR9KVxyXG4gICAgfVxyXG59XHJcbiJdfQ==