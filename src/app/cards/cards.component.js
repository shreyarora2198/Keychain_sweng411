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
            // console.log(this.result);
            var length = _this.getLength();
            console.log("i am here");
            _this.checkKeychains(length);
            // while(this.index!=length){
            // }
        })
            .catch(function (error) { return console.log("Error: " + error); });
        // setTimeout(()=>{
        // }, 1000);
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
        console.log("length is " + length);
        return length;
    };
    CardsComponent.prototype.getKeychains = function (length) {
        var _this = this;
        // for(var item in this.result.value){
        firebase.getValue('/users/' + this.user.getUserId() + '/Keychains/' + this.items.pop())
            .then(function (result) {
            console.log("get keychains");
            _this.individualBarcode = [];
            _this.individualBarcode.push(result.value.Data);
            _this.individualBarcode.push(result.value.Format);
            _this.individualBarcode.push(result.value.cardLocation);
            _this.individualBarcode.push(result.value.cardName);
            _this.barcodes.unshift(_this.individualBarcode);
            _this.index++;
            _this.checkKeychains(length);
        });
        // }
    };
    CardsComponent.prototype.checkKeychains = function (length) {
        if (this.index < length) {
            console.log("checkKeychains");
            this.getKeychains(length);
        }
        else {
            console.log("after promise");
            for (var i = 0; i < this.barcodes.length; i++) {
                this.cardsForList.push(new KeychainCard(this.barcodes[i][0], this.barcodes[i][1], this.barcodes[i][2], this.barcodes[i][3]));
                for (var j = 0; j < this.barcodes[i].length; j++) {
                    console.log();
                    console.log("Keychain " + i + ": " + this.barcodes[i][j]);
                }
            }
        }
        // return 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RTtBQUN6RSxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBR3pDLGdDQUErQjtBQUUvQixrREFBcUQ7QUFFckQsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsSUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFDNUMsSUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBRTVDO0lBQ0ksc0JBQW1CLFNBQWlCLEVBQ2pCLGFBQXFCLEVBQ3JCLE9BQWUsRUFDZixRQUFnQjtRQUhoQixjQUFTLEdBQVQsU0FBUyxDQUFRO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFDZixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUksQ0FBQztJQUM1QyxtQkFBQztBQUFELENBQUMsQUFMRCxJQUtDO0FBU0Q7SUFhSSx3QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixpQkFBb0M7UUFGcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFDVixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBVnhELFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxXQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2QsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLGdCQUFXLEdBQVcsRUFBRSxDQUFDO1FBQ3pCLGtCQUFhLEdBQVcsRUFBRSxDQUFDO1FBQzNCLGFBQVEsR0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLHNCQUFpQixHQUFhLEVBQUUsQ0FBQztRQUs3QixJ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Vmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IEltYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvaW1hZ2VcIjtcbmltcG9ydCB7IFRleHRGaWVsZCB9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUluamVjdG9yIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmUvc3JjL3ZpZXcvcmVmc1wiO1xuaW1wb3J0IHsgS2V5Y2hhaW5DYXJkQ2xhc3MgfSBmcm9tIFwiLi4va2V5Y2hhaW4tY2FyZFwiO1xuXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XG5jb25zdCBaWGluZyA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtenhpbmdcIik7XG5jb25zdCBJbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XG5cbmNsYXNzIEtleWNoYWluQ2FyZCB7XG4gICAgY29uc3RydWN0b3IocHVibGljIGJhcmNvZGVJZDogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBiYXJjb2RlRm9ybWF0OiBzdHJpbmcsXG4gICAgICAgICAgICAgICAgcHVibGljIGNhcmRMb2M6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgY2FyZE5hbWU6IHN0cmluZykgeyB9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNhcmRzXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyZHMuY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NhcmRzLmNvbXBvbmVudC5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBDYXJkc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwdWJsaWMgY2FyZHNGb3JMaXN0OiBBcnJheTxLZXljaGFpbkNhcmQ+O1xuXG4gICAgQFZpZXdDaGlsZChcImJhcmNvZGVJbWdcIikgYmFyY29kZUltZzogRWxlbWVudFJlZjtcbiAgICBpdGVtcyA9IFtdO1xuICAgIHJlc3VsdCA9IG51bGw7XG4gICAgaW5kZXggPSAwO1xuICAgIGJhcmNvZGVEYXRhOiBzdHJpbmcgPSBcIlwiO1xuICAgIGJhcmNvZGVGb3JtYXQ6IHN0cmluZyA9IFwiXCI7XG4gICAgYmFyY29kZXM6IFtzdHJpbmdbXV09IFtbXV07IFxuICAgIGluZGl2aWR1YWxCYXJjb2RlOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBrZXljaGFpbmNhcmRjbGFzczogS2V5Y2hhaW5DYXJkQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5jYXJkc0Zvckxpc3QgPSBbXTtcbiAgICB9XG4gICAgXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMnKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgLy9mdW5jdGlvbiB0byBnZXQgbGVuZ3RoIG9mIGtleWNoYWluc1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCk7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaSBhbSBoZXJlXCIpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0tleWNoYWlucyhsZW5ndGgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyB3aGlsZSh0aGlzLmluZGV4IT1sZW5ndGgpe1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIH0sIDEwMDApO1xuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgbmF2aWdhdGVWaWV3Q2FyZCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ZpZXctY2FyZFwiXSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9uSXRlbVRhcChhcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiSXRlbSBUYXBwZWQgYXQgY2VsbCBpbmRleDogXCIgKyBhcmdzLmluZGV4KTtcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRCYXJjb2RlSWQodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVswXSk7XG4gICAgICAgIHRoaXMua2V5Y2hhaW5jYXJkY2xhc3Muc2V0QmFyY29kZUZvcm1hdCh0aGlzLmJhcmNvZGVzW2FyZ3MuaW5kZXhdWzFdKTtcbiAgICAgICAgdGhpcy5rZXljaGFpbmNhcmRjbGFzcy5zZXRDYXJkTG9jYXRpb24odGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVsyXSk7XG4gICAgICAgIHRoaXMua2V5Y2hhaW5jYXJkY2xhc3Muc2V0Q2FyZE5hbWUodGhpcy5iYXJjb2Rlc1thcmdzLmluZGV4XVszXSk7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ZpZXctY2FyZFwiXSk7XG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCl7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICBmb3IodmFyIGl0ZW0gaW4gdGhpcy5yZXN1bHQudmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgbGVuZ3RoKys7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coXCJsZW5ndGggaXMgXCIrbGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICBnZXRLZXljaGFpbnMobGVuZ3RoKXtcbiAgICAgICAgLy8gZm9yKHZhciBpdGVtIGluIHRoaXMucmVzdWx0LnZhbHVlKXtcbiAgICAgICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMvJyt0aGlzLml0ZW1zLnBvcCgpKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJnZXQga2V5Y2hhaW5zXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUgPSBbXSA7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5EYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2gocmVzdWx0LnZhbHVlLkZvcm1hdCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKHJlc3VsdC52YWx1ZS5jYXJkTG9jYXRpb24pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUucHVzaChyZXN1bHQudmFsdWUuY2FyZE5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZXMudW5zaGlmdCh0aGlzLmluZGl2aWR1YWxCYXJjb2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICsrO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tLZXljaGFpbnMobGVuZ3RoKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjaGVja0tleWNoYWlucyhsZW5ndGgpe1xuICAgICAgICBpZih0aGlzLmluZGV4PCBsZW5ndGgpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGVja0tleWNoYWluc1wiKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0S2V5Y2hhaW5zKGxlbmd0aCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlciBwcm9taXNlXCIpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDtpIDwgdGhpcy5iYXJjb2Rlcy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmNhcmRzRm9yTGlzdC5wdXNoKG5ldyBLZXljaGFpbkNhcmQodGhpcy5iYXJjb2Rlc1tpXVswXSwgdGhpcy5iYXJjb2Rlc1tpXVsxXSwgdGhpcy5iYXJjb2Rlc1tpXVsyXSwgdGhpcy5iYXJjb2Rlc1tpXVszXSkpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZm9yKHZhciBqID0wO2o8dGhpcy5iYXJjb2Rlc1tpXS5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJLZXljaGFpbiBcIitpK1wiOiBcIit0aGlzLmJhcmNvZGVzW2ldW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIDE7XG4gICAgfVxuXG59Il19