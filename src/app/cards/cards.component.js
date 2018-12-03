"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var ZXing = require("nativescript-zxing");
var ImageSource = require("image-source");
var KeychainCard = /** @class */ (function () {
    function KeychainCard(barcodeId, barcodeFormat, cardLoc, cardName) {
        this.barcodeId = barcodeId;
        this.barcodeFormat = barcodeFormat;
        this.cardLoc = cardLoc;
        this.cardName = cardName;
    }
    return KeychainCard;
}());
var CardsComponent = /** @class */ (function () {
    function CardsComponent(router, user) {
        this.router = router;
        this.user = user;
        this.barcodeData = "";
        this.barcodeFormat = "";
        this.barcodes = [[]];
        this.individualBarcode = [];
        this.cardsForList = [];
    }
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        firebase.getValue('/users/' + this.user.getUserId() + '/Keychains')
            .then(function (result) {
            for (var item in result.value) {
                firebase.getValue('/users/' + _this.user.getUserId() + '/Keychains/' + item)
                    .then(function (result) {
                    console.log(JSON.stringify(result.value.Data) + " is the data result");
                    console.log(JSON.stringify(result.value.Format) + " is the format result");
                    console.log(JSON.stringify(result.value.cardLocation) + " is the location result");
                    console.log(JSON.stringify(result.value.cardName) + " is the name result");
                    _this.individualBarcode = [];
                    _this.individualBarcode.push(result.value.Data);
                    _this.individualBarcode.push(result.value.Format);
                    _this.individualBarcode.push(result.value.cardLocation);
                    _this.individualBarcode.push(result.value.cardName);
                    _this.barcodes.unshift(_this.individualBarcode);
                });
            }
        })
            .catch(function (error) { return console.log("Error: " + error); });
        setTimeout(function () {
            for (var i = 0; i < _this.barcodes.length; i++) {
                _this.cardsForList.push(new KeychainCard(_this.barcodes[i][0], _this.barcodes[i][1], _this.barcodes[i][2], _this.barcodes[i][3]));
                for (var j = 0; j < _this.barcodes[i].length; j++) {
                    console.log();
                    console.log("Keychain " + i + ": " + _this.barcodes[i][j]);
                }
            }
        }, 500);
    };
    CardsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CardsComponent.prototype.navigateViewCard = function () {
        this.router.navigate(["/view-card"]);
    };
    CardsComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
    };
    tslib_1.__decorate([
        core_1.ViewChild("barcodeImg"),
        tslib_1.__metadata("design:type", core_1.ElementRef)
    ], CardsComponent.prototype, "barcodeImg", void 0);
    CardsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Cards",
            moduleId: module.id,
            styleUrls: ["./cards.component.css"],
            templateUrl: "./cards.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            user_1.User])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RTtBQUN6RSxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBR3pDLGdDQUErQjtBQUcvQixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNuRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFNUM7SUFDSSxzQkFBbUIsU0FBaUIsRUFDakIsYUFBcUIsRUFDckIsT0FBZSxFQUNmLFFBQWdCO1FBSGhCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBSSxDQUFDO0lBQzVDLG1CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFTRDtJQVNJLHdCQUFvQixNQUFjLEVBQ2QsSUFBVTtRQURWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUc3QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQThCQztRQTdCRyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFB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QUMsQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBQ0wsQ0FBQztRQUNMLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQseUNBQWdCLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFTSxrQ0FBUyxHQUFoQixVQUFpQixJQUFJO1FBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFyRHdCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzBDQUFhLGlCQUFVO3NEQUFDO0lBSnZDLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7aURBVzhCLGVBQU07WUFDUixXQUFJO09BVnJCLGNBQWMsQ0EyRDFCO0lBQUQscUJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XHJcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vdXNlclwiO1xyXG5pbXBvcnQgeyBjcmVhdGVJbmplY3RvciB9IGZyb20gXCJAYW5ndWxhci9jb3JlL3NyYy92aWV3L3JlZnNcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBaWGluZyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtenhpbmdcIik7XHJcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcclxuXHJcbmNsYXNzIEtleWNoYWluQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFyY29kZUlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYmFyY29kZUZvcm1hdDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNhcmRMb2M6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjYXJkTmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDYXJkc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJkcy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkcy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBjYXJkc0Zvckxpc3Q6IEFycmF5PEtleWNoYWluQ2FyZD47XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcclxuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYmFyY29kZUZvcm1hdDogc3RyaW5nID0gXCJcIjtcclxuICAgIGJhcmNvZGVzOiBbc3RyaW5nW11dPSBbW11dOyBcclxuICAgIGluZGl2aWR1YWxCYXJjb2RlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcikge1xyXG4gICAgICAgIHRoaXMuY2FyZHNGb3JMaXN0ID0gW107XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMnKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiByZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nK3RoaXMudXNlci5nZXRVc2VySWQoKSsnL0tleWNoYWlucy8nK2l0ZW0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuRGF0YSkgK1wiIGlzIHRoZSBkYXRhIHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuRm9ybWF0KSArXCIgaXMgdGhlIGZvcm1hdCByZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlLmNhcmRMb2NhdGlvbikgK1wiIGlzIHRoZSBsb2NhdGlvbiByZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlLmNhcmROYW1lKSArXCIgaXMgdGhlIG5hbWUgcmVzdWx0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUgPSBbXSA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5EYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2gocmVzdWx0LnZhbHVlLkZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5jYXJkTG9jYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUucHVzaChyZXN1bHQudmFsdWUuY2FyZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZXMudW5zaGlmdCh0aGlzLmluZGl2aWR1YWxCYXJjb2RlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLmJhcmNvZGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXJkc0Zvckxpc3QucHVzaChuZXcgS2V5Y2hhaW5DYXJkKHRoaXMuYmFyY29kZXNbaV1bMF0sIHRoaXMuYmFyY29kZXNbaV1bMV0sIHRoaXMuYmFyY29kZXNbaV1bMl0sIHRoaXMuYmFyY29kZXNbaV1bM10pKTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9MDtqPHRoaXMuYmFyY29kZXNbaV0ubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktleWNoYWluIFwiK2krXCI6IFwiK3RoaXMuYmFyY29kZXNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmF2aWdhdGVWaWV3Q2FyZCgpIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlldy1jYXJkXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XHJcbiAgICB9XHJcblxyXG59Il19