"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var keychain_card_1 = require("../keychain-card");
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
    function CardsComponent(router, user, keychaincardclass) {
        this.router = router;
        this.user = user;
        this.keychaincardclass = keychaincardclass;
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
        this.keychaincardclass.setBarcodeFormat(this.barcodes[args.index][0]);
        this.keychaincardclass.setBarcodeId(this.barcodes[args.index][1]);
        this.keychaincardclass.setCardLocation(this.barcodes[args.index][2]);
        this.keychaincardclass.setCardName(this.barcodes[args.index][3]);
        console.log(this.keychaincardclass.getBarcodeFormat());
        console.log(this.keychaincardclass.getBarcodeId());
        console.log(this.keychaincardclass.getCardLocation());
        console.log(this.keychaincardclass.getCardName());
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
            user_1.User,
            keychain_card_1.KeychainCardClass])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RTtBQUN6RSxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBR3pDLGdDQUErQjtBQUUvQixrREFBcUQ7QUFFckQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTVDO0lBQ0ksc0JBQW1CLFNBQWlCLEVBQ2pCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixRQUFnQjtRQUhoQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUksQ0FBQztJQUM1QyxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBU0Q7SUFTSSx3QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixpQkFBb0M7UUFGcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBTnhELGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUk3QixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUNBQVEsR0FBUjtRQUFBLGlCQThCQztRQTdCRyxR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QztRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRSxDQUFDLENBQUM7UUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBL0R3QjtRQUF4QixnQkFBUyxDQUFDLFlBQVksQ0FBQzswQ0FBYSxpQkFBVTtzREFBQztJQUp2QyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO2lEQVc4QixlQUFNO1lBQ1IsV0FBSTtZQUNTLGlDQUFpQjtPQVgvQyxjQUFjLENBcUUxQjtJQUFELHFCQUFDO0NBQUEsQUFyRUQsSUFxRUM7QUFyRVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdmlldy9yZWZzXCI7XHJcbmltcG9ydCB7IEtleWNoYWluQ2FyZENsYXNzIH0gZnJvbSBcIi4uL2tleWNoYWluLWNhcmRcIjtcclxuXHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5jb25zdCBaWGluZyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtenhpbmdcIik7XHJcbmNvbnN0IEltYWdlU291cmNlID0gcmVxdWlyZShcImltYWdlLXNvdXJjZVwiKTtcclxuXHJcbmNsYXNzIEtleWNoYWluQ2FyZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgYmFyY29kZUlkOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwdWJsaWMgYmFyY29kZUZvcm1hdDogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHVibGljIGNhcmRMb2M6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHB1YmxpYyBjYXJkTmFtZTogc3RyaW5nKSB7IH1cclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJDYXJkc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9jYXJkcy5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXJkcy5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ2FyZHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIHB1YmxpYyBjYXJkc0Zvckxpc3Q6IEFycmF5PEtleWNoYWluQ2FyZD47XHJcblxyXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcclxuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYmFyY29kZUZvcm1hdDogc3RyaW5nID0gXCJcIjtcclxuICAgIGJhcmNvZGVzOiBbc3RyaW5nW11dPSBbW11dOyBcclxuICAgIGluZGl2aWR1YWxCYXJjb2RlOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUga2V5Y2hhaW5jYXJkY2xhc3M6IEtleWNoYWluQ2FyZENsYXNzKSB7XHJcbiAgICAgICAgdGhpcy5jYXJkc0Zvckxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy91c2Vycy8nK3RoaXMudXNlci5nZXRVc2VySWQoKSsnL0tleWNoYWlucycpXHJcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgZm9yKHZhciBpdGVtIGluIHJlc3VsdC52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3VzZXJzLycrdGhpcy51c2VyLmdldFVzZXJJZCgpKycvS2V5Y2hhaW5zLycraXRlbSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5EYXRhKSArXCIgaXMgdGhlIGRhdGEgcmVzdWx0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5Gb3JtYXQpICtcIiBpcyB0aGUgZm9ybWF0IHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuY2FyZExvY2F0aW9uKSArXCIgaXMgdGhlIGxvY2F0aW9uIHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuY2FyZE5hbWUpICtcIiBpcyB0aGUgbmFtZSByZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZSA9IFtdIDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2gocmVzdWx0LnZhbHVlLkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUucHVzaChyZXN1bHQudmFsdWUuRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2gocmVzdWx0LnZhbHVlLmNhcmRMb2NhdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5jYXJkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXJjb2Rlcy51bnNoaWZ0KHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcclxuICAgICAgICBcclxuICAgICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aSA8IHRoaXMuYmFyY29kZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRm9yTGlzdC5wdXNoKG5ldyBLZXljaGFpbkNhcmQodGhpcy5iYXJjb2Rlc1tpXVswXSwgdGhpcy5iYXJjb2Rlc1tpXVsxXSwgdGhpcy5iYXJjb2Rlc1tpXVsyXSwgdGhpcy5iYXJjb2Rlc1tpXVszXSkpO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0wO2o8dGhpcy5iYXJjb2Rlc1tpXS5sZW5ndGg7aisrKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiS2V5Y2hhaW4gXCIraStcIjogXCIrdGhpcy5iYXJjb2Rlc1tpXVtqXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1MDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBuYXZpZ2F0ZVZpZXdDYXJkKCkge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi92aWV3LWNhcmRcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkl0ZW1UYXAoYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcclxuICAgICAgICB0aGlzLmtleWNoYWluY2FyZGNsYXNzLnNldEJhcmNvZGVGb3JtYXQodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVswXSk7XHJcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRCYXJjb2RlSWQodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVsxXSk7XHJcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRDYXJkTG9jYXRpb24odGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVsyXSk7XHJcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRDYXJkTmFtZSh0aGlzLmJhcmNvZGVzW2FyZ3MuaW5kZXhdWzNdKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5rZXljaGFpbmNhcmRjbGFzcy5nZXRCYXJjb2RlRm9ybWF0KCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5Y2hhaW5jYXJkY2xhc3MuZ2V0QmFyY29kZUlkKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5Y2hhaW5jYXJkY2xhc3MuZ2V0Q2FyZExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMua2V5Y2hhaW5jYXJkY2xhc3MuZ2V0Q2FyZE5hbWUoKSk7XHJcbiAgICB9XHJcblxyXG59Il19