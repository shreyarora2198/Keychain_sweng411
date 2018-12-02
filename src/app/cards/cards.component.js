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
var CardsComponent = /** @class */ (function () {
    function CardsComponent(router, user) {
        this.router = router;
        this.user = user;
        this.barcodeData = "";
        this.barcodeFormat = "";
        this.barcodes = [[]];
        this.individualBarcode = [];
        // Use the component constructor to inject providers.
    }
    CardsComponent.prototype.firebase = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    CardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //     this.firebase().then(()=>{
        //         console.log("here");
        // });
        // this.firebase();
        // for(var i = 0;i< this.barcodes.length;i++){
        //     for(var j =0;j<this.barcodes[i].length;j++){
        //         console.log("Keychain "+i+": "+this.barcodes[i][j]);
        //     }
        // }
        firebase.getValue('/users/' + this.user.getUserId() + '/Keychains')
            .then(function (result) {
            for (var item in result.value) {
                // console.log("result"+JSON.stringify(item));
                firebase.getValue('/users/' + _this.user.getUserId() + '/Keychains/' + item)
                    .then(function (result) {
                    console.log(JSON.stringify(result.value.Data) + " is the data result");
                    console.log(JSON.stringify(result.value.Format) + " is the format result");
                    console.log(JSON.stringify(result.value.cardLocation) + " is the location result");
                    console.log(JSON.stringify(result.value.cardName) + " is the name result");
                    _this.individualBarcode = [];
                    _this.individualBarcode.push(JSON.stringify(result.value.Data));
                    _this.individualBarcode.push(JSON.stringify(result.value.Format));
                    _this.individualBarcode.push(JSON.stringify(result.value.cardLocation));
                    _this.individualBarcode.push(JSON.stringify(result.value.cardName));
                    _this.barcodes.push(_this.individualBarcode);
                });
            }
        })
            .catch(function (error) { return console.log("Error: " + error); });
        setTimeout(function () {
            console.log("size");
            for (var i = 0; i < _this.barcodes.length; i++) {
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
    // snapshotToArray(snapshot){
    //     var returnArr =[];
    //     snapshot.forEach(function(childSnapshot){
    //         var item = childSnapshot.val();
    //         item.key = childSnapshot.key;
    //         returnArr.push(item);
    //     });
    //     return returnArr;
    // }
    CardsComponent.prototype.navigateViewCard = function () {
        this.router.navigate(["/view-card"]);
    };
    CardsComponent.prototype.viewBarcodeInfo = function () {
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
        tslib_1.__metadata("design:paramtypes", [router_1.Router, user_1.User])
    ], CardsComponent);
    return CardsComponent;
}());
exports.CardsComponent = CardsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyZHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5RTtBQUN6RSxpQ0FBbUM7QUFFbkMsMENBQXlDO0FBR3pDLGdDQUErQjtBQUUvQixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUN6RCxJQUFNLGNBQWMsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUVuRSxJQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM1QyxJQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7QUFRNUM7SUFPSSx3QkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFKdEQsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFDekIsa0JBQWEsR0FBVyxFQUFFLENBQUM7UUFDM0IsYUFBUSxHQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0Isc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBRTdCLHFEQUFxRDtJQUN6RCxDQUFDO0lBQ0ssaUNBQVEsR0FBZDs7Ozs7O0tBaUJDO0lBQ0QsaUNBQVEsR0FBUjtRQUFBLGlCQXlDQztRQXhDRyxpQ0FBaUM7UUFDakMsK0JBQStCO1FBQy9CLE1BQU07UUFDTixtQkFBbUI7UUFDbkIsOENBQThDO1FBQzlDLG1EQUFtRDtRQUNuRCwrREFBK0Q7UUFDL0QsUUFBUTtRQUNSLElBQUk7UUFDSixRQUFRLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFDLFlBQVksQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLEtB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Qix5QkFBeUI7SUFDekIsZ0RBQWdEO0lBQ2hELDBDQUEwQztJQUMxQyx3Q0FBd0M7SUFFeEMsZ0NBQWdDO0lBQ2hDLFVBQVU7SUFDVix3QkFBd0I7SUFDeEIsSUFBSTtJQUNKLHlDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0Qsd0NBQWUsR0FBZjtJQUVBLENBQUM7SUF4RndCO1FBQXhCLGdCQUFTLENBQUMsWUFBWSxDQUFDOzBDQUFhLGlCQUFVO3NEQUFDO0lBRnZDLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7aURBUzhCLGVBQU0sRUFBZ0IsV0FBSTtPQVA3QyxjQUFjLENBNEYxQjtJQUFELHFCQUFDO0NBQUEsQUE1RkQsSUE0RkM7QUE1Rlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9pbWFnZVwiO1xyXG5pbXBvcnQgeyBUZXh0RmllbGQgfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcclxuaW1wb3J0IHsgY3JlYXRlSW5qZWN0b3IgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZS9zcmMvdmlldy9yZWZzXCI7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5cclxuY29uc3QgWlhpbmcgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXp4aW5nXCIpO1xyXG5jb25zdCBJbWFnZVNvdXJjZSA9IHJlcXVpcmUoXCJpbWFnZS1zb3VyY2VcIik7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiQ2FyZHNcIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyZHMuY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FyZHMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKFwiYmFyY29kZUltZ1wiKSBiYXJjb2RlSW1nOiBFbGVtZW50UmVmO1xyXG4gICAgYmFyY29kZURhdGE6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBiYXJjb2RlRm9ybWF0OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgYmFyY29kZXM6IFtzdHJpbmdbXV09IFtbXV07IFxyXG4gICAgaW5kaXZpZHVhbEJhcmNvZGU6IHN0cmluZ1tdID0gW107XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXI6IFVzZXIpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG4gICAgYXN5bmMgZmlyZWJhc2UoKXtcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmV0dXJuIFByb21pc2UucmVzb2x2ZSgxKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJibGFoXCIrYmFyY29kZXMubGVuZ3RoKTtcclxuICAgICAgICAgICAgLy8gZm9yKHZhciBpID0gMDtpPCBiYXJjb2Rlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgLy8gICAgIGZvcih2YXIgaiA9MDtqPGJhcmNvZGVzW2ldLmxlbmd0aDtqKyspe1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiS2V5Y2hhaW4gXCIraStcIjogXCIrYmFyY29kZXNbaV1bal0pO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc3QgYmFyY29kZUltYWdlID0gPEltYWdlPnRoaXMuYmFyY29kZUltZy5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIC8vIGNvbnN0IHp4ID0gbmV3IFpYaW5nKCk7XHJcbiAgICAgICAgLy8gY29uc3QgbmV3SW1nID0genguY3JlYXRlQmFyY29kZSh7XHJcbiAgICAgICAgLy8gICAgIGVuY29kZTogdGhpcy5iYXJjb2RlRGF0YSwvL2RhdGFcclxuICAgICAgICAvLyAgICAgZm9ybWF0OiB0aGlzLmJhcmNvZGVGb3JtYXQvL2Zvcm1hdFxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIGJhcmNvZGVJbWFnZS5pbWFnZVNvdXJjZSA9IEltYWdlU291cmNlLmZyb21OYXRpdmVTb3VyY2UobmV3SW1nKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLmZpcmViYXNlKCkudGhlbigoKT0+e1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJoZXJlXCIpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIC8vIHRoaXMuZmlyZWJhc2UoKTtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwO2k8IHRoaXMuYmFyY29kZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgLy8gICAgIGZvcih2YXIgaiA9MDtqPHRoaXMuYmFyY29kZXNbaV0ubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIktleWNoYWluIFwiK2krXCI6IFwiK3RoaXMuYmFyY29kZXNbaV1bal0pO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvdXNlcnMvJyt0aGlzLnVzZXIuZ2V0VXNlcklkKCkrJy9LZXljaGFpbnMnKVxyXG4gICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiByZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRcIitKU09OLnN0cmluZ2lmeShpdGVtKSk7XHJcbiAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3VzZXJzLycrdGhpcy51c2VyLmdldFVzZXJJZCgpKycvS2V5Y2hhaW5zLycraXRlbSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5EYXRhKSArXCIgaXMgdGhlIGRhdGEgcmVzdWx0XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5Gb3JtYXQpICtcIiBpcyB0aGUgZm9ybWF0IHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuY2FyZExvY2F0aW9uKSArXCIgaXMgdGhlIGxvY2F0aW9uIHJlc3VsdFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuY2FyZE5hbWUpICtcIiBpcyB0aGUgbmFtZSByZXN1bHRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZSA9IFtdIDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2goSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlLkRhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxCYXJjb2RlLnB1c2goSlNPTi5zdHJpbmdpZnkocmVzdWx0LnZhbHVlLkZvcm1hdCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbEJhcmNvZGUucHVzaChKU09OLnN0cmluZ2lmeShyZXN1bHQudmFsdWUuY2FyZExvY2F0aW9uKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsQmFyY29kZS5wdXNoKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5jYXJkTmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFyY29kZXMucHVzaCh0aGlzLmluZGl2aWR1YWxCYXJjb2RlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNpemVcIik7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7aTwgdGhpcy5iYXJjb2Rlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaiA9MDtqPHRoaXMuYmFyY29kZXNbaV0ubGVuZ3RoO2orKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIktleWNoYWluIFwiK2krXCI6IFwiK3RoaXMuYmFyY29kZXNbaV1bal0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuICAgIC8vIHNuYXBzaG90VG9BcnJheShzbmFwc2hvdCl7XHJcbiAgICAvLyAgICAgdmFyIHJldHVybkFyciA9W107XHJcbiAgICAvLyAgICAgc25hcHNob3QuZm9yRWFjaChmdW5jdGlvbihjaGlsZFNuYXBzaG90KXtcclxuICAgIC8vICAgICAgICAgdmFyIGl0ZW0gPSBjaGlsZFNuYXBzaG90LnZhbCgpO1xyXG4gICAgLy8gICAgICAgICBpdGVtLmtleSA9IGNoaWxkU25hcHNob3Qua2V5O1xyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuQXJyLnB1c2goaXRlbSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgcmV0dXJuIHJldHVybkFycjtcclxuICAgIC8vIH1cclxuICAgIG5hdmlnYXRlVmlld0NhcmQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL3ZpZXctY2FyZFwiXSk7XHJcbiAgICB9XHJcbiAgICB2aWV3QmFyY29kZUluZm8oKXtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbn0iXX0=