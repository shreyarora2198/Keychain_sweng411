"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var keychain_card_1 = require("../keychain-card");
var firebase = require("nativescript-plugin-firebase");
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
        this.items = [];
        this.result = null;
        this.index = 0;
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
            //function to get length of keychains
            _this.result = result;
            var length = _this.getLength();
            _this.checkKeychains(length);
        })
            .catch(function (error) { return alert("Error: " + error); });
    };
    CardsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CardsComponent.prototype.navigateViewCard = function () {
        this.router.navigate(["/view-card"]);
    };
    CardsComponent.prototype.onItemTap = function (args) {
        this.keychaincardclass.setBarcodeId(this.barcodes[args.index][0]);
        this.keychaincardclass.setBarcodeFormat(this.barcodes[args.index][1]);
        this.keychaincardclass.setCardLocation(this.barcodes[args.index][2]);
        this.keychaincardclass.setCardName(this.barcodes[args.index][3]);
        this.router.navigate(["/view-card"]);
    };
    CardsComponent.prototype.getLength = function () {
        var length = 0;
        for (var item in this.result.value) {
            this.items.push(item);
            length++;
        }
        return length;
    };
    CardsComponent.prototype.getKeychains = function (length) {
        var _this = this;
        firebase.getValue('/users/' + this.user.getUserId() + '/Keychains/' + this.items.pop())
            .then(function (result) {
            _this.individualBarcode = [];
            _this.individualBarcode.push(result.value.Data);
            _this.individualBarcode.push(result.value.Format);
            _this.individualBarcode.push(result.value.cardLocation);
            _this.individualBarcode.push(result.value.cardName);
            _this.barcodes.unshift(_this.individualBarcode);
            _this.index++;
            _this.checkKeychains(length);
        });
    };
    CardsComponent.prototype.checkKeychains = function (length) {
        if (this.index < length) {
            this.getKeychains(length);
        }
        else {
            for (var i = 0; i < this.barcodes.length; i++) {
                this.cardsForList.push(new KeychainCard(this.barcodes[i][0], this.barcodes[i][1], this.barcodes[i][2], this.barcodes[i][3]));
            }
            this.cardsForList.pop();
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RTtBQUN6RSxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBQ3pDLGdDQUErQjtBQUMvQixrREFBcUQ7QUFFckQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQ7SUFDSSxzQkFBbUIsU0FBaUIsRUFDakIsYUFBcUIsRUFDckIsT0FBZSxFQUNmLFFBQWdCO1FBSGhCLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUNmLGFBQVEsR0FBUixRQUFRLENBQVE7SUFBSSxDQUFDO0lBQzVDLG1CQUFDO0FBQUQsQ0FBQyxBQUxELElBS0M7QUFTRDtJQWFJLHdCQUFvQixNQUFjLEVBQ2QsSUFBVSxFQUNWLGlCQUFvQztRQUZwQyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFWeEQsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0Isc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBSzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQUEsaUJBU0M7UUFSRyxRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLFlBQVks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ZThCLGVBQU07WUFDUixXQUFJO1lBQ1MsaUNBQWlCO09BZi9DLGNBQWMsQ0FrRjFCO0lBQUQscUJBQUM7Q0FBQSxBQWxGRCxJQWtGQztBQWxGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyXCI7XG5pbXBvcnQgeyBLZXljaGFpbkNhcmRDbGFzcyB9IGZyb20gXCIuLi9rZXljaGFpbi1jYXJkXCI7XG5cbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNsYXNzIEtleWNoYWluQ2FyZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGJhcmNvZGVJZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBiYXJjb2RlRm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIGNhcmRMb2M6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2FyZE5hbWU6IHN0cmluZykgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNhcmRzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyZHMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmRzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgY2FyZHNGb3JMaXN0OiBBcnJheTxLZXljaGFpbkNhcmQ+O1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcbiAgICBpdGVtcyA9IFtdO1xuICAgIHJlc3VsdCA9IG51bGw7XG4gICAgaW5kZXggPSAwO1xuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xuICAgIGJhcmNvZGVGb3JtYXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgYmFyY29kZXM6IFtzdHJpbmdbXV09IFtbXV07IFxuICAgIGluZGl2aWR1YWxCYXJjb2RlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBrZXljaGFpbmNhcmRjbGFzczogS2V5Y2hhaW5DYXJkQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5jYXJkc0Zvckxpc3QgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMnKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy9mdW5jdGlvbiB0byBnZXQgbGVuZ3RoIG9mIGtleWNoYWluc1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tLZXljaGFpbnMobGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGFsZXJ0KFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBuYXZpZ2F0ZVZpZXdDYXJkKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlldy1jYXJkXCJdKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRCYXJjb2RlSWQodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVswXSk7XG4gICAgICAgIHRoaXMua2V5Y2hhaW5jYXJkY2xhc3Muc2V0QmFyY29kZUZvcm1hdCh0aGlzLmJhcmNvZGVzW2FyZ3MuaW5kZXhdWzFdKTtcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRDYXJkTG9jYXRpb24odGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVsyXSk7XG4gICAgICAgIHRoaXMua2V5Y2hhaW5jYXJkY2xhc3Muc2V0Q2FyZE5hbWUodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVszXSk7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi92aWV3LWNhcmRcIl0pO1xuICAgIH1cblxuICAgIGdldExlbmd0aCgpe1xuICAgICAgICB2YXIgbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yKHZhciBpdGVtIGluIHRoaXMucmVzdWx0LnZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuXG4gICAgZ2V0S2V5Y2hhaW5zKGxlbmd0aCl7XG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMvJyt0aGlzLml0ZW1zLnBvcCgpKVxuICAgICAgICAudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUgPSBbXSA7XG4gICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2gocmVzdWx0LnZhbHVlLkRhdGEpO1xuICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5Gb3JtYXQpO1xuICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5jYXJkTG9jYXRpb24pO1xuICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5jYXJkTmFtZSk7XG4gICAgICAgICAgICB0aGlzLmJhcmNvZGVzLnVuc2hpZnQodGhpcy5pbmRpdmlkdWFsQmFyY29kZSk7XG4gICAgICAgICAgICB0aGlzLmluZGV4ICsrO1xuICAgICAgICAgICAgdGhpcy5jaGVja0tleWNoYWlucyhsZW5ndGgpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNoZWNrS2V5Y2hhaW5zKGxlbmd0aCl7XG4gICAgICAgIGlmKHRoaXMuaW5kZXg8IGxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmdldEtleWNoYWlucyhsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLmJhcmNvZGVzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIHRoaXMuY2FyZHNGb3JMaXN0LnB1c2gobmV3IEtleWNoYWluQ2FyZCh0aGlzLmJhcmNvZGVzW2ldWzBdLCB0aGlzLmJhcmNvZGVzW2ldWzFdLCB0aGlzLmJhcmNvZGVzW2ldWzJdLCB0aGlzLmJhcmNvZGVzW2ldWzNdKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNhcmRzRm9yTGlzdC5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cblxufSJdfQ==