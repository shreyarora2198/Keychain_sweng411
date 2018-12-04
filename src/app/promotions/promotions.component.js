"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var user_1 = require("../user");
var router_1 = require("@angular/router");
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent(router, user) {
        this.router = router;
        this.user = user;
        this.companyPromotions = [[]];
        this.promotions = [[[]]];
        this.individualPromotion = [];
        // Use the component constructor to inject providers.
    }
    PromotionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        firebase.getValue('/promotions/')
            .then(function (result) {
            for (var item in result.value) {
                _this.companyPromotions = [[]];
                // console.log("company name: "+item);
                _this.getPromotions(item);
                _this.promotions.push(_this.companyPromotions);
            }
        })
            .catch(function (error) { return console.log("Error" + error); });
        setTimeout(function () {
        }, 4000);
    };
    PromotionsComponent.prototype.getPromotions = function (item) {
        var _this = this;
        firebase.getValue('/promotions/' + item)
            .then(function (resultPromo) {
            for (var promo in resultPromo.value) {
                _this.individualPromotion = [];
                firebase.getValue('/promotions/' + item + '/' + promo)
                    .then(function (finalResult) {
                    console.log("company Name" + item);
                    console.log("promoName" + finalResult.value.promoName);
                    console.log("promoDesc" + finalResult.value.promoDesc);
                    _this.individualPromotion.push(item);
                    _this.individualPromotion.push(finalResult.value.promoName);
                    _this.individualPromotion.push(finalResult.value.promoDesc);
                    _this.companyPromotions.push(_this.individualPromotion);
                });
            }
        })
            .catch(function (error) { return console.log("error" + error); });
    };
    PromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    PromotionsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Promotions",
            moduleId: module.id,
            styleUrls: ["./promotions.component.css"],
            templateUrl: "./promotions.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router, user_1.User])
    ], PromotionsComponent);
    return PromotionsComponent;
}());
exports.PromotionsComponent = PromotionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ25FLGdDQUE2QjtBQUM3QiwwQ0FBeUM7QUFPekM7SUFJSSw2QkFBb0IsTUFBYyxFQUFVLElBQVU7UUFBbEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFIdEQsc0JBQWlCLEdBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQyxlQUFVLEdBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xDLHdCQUFtQixHQUFhLEVBQUUsQ0FBQztRQUUvQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7YUFDaEMsSUFBSSxDQUFDLFVBQUMsTUFBTTtZQUNULEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUMxQixLQUFJLENBQUMsaUJBQWlCLEdBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDN0Isc0NBQXNDO2dCQUN0QyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUNqRCxDQUFDO1FBQ0wsQ0FBQyxDQUNBO2FBQ0EsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtRQUN6QyxVQUFVLENBQUM7UUFFWCxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLElBQUk7UUFBbEIsaUJBb0JDO1FBbEJHLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQzthQUM3QixJQUFJLENBQUMsVUFBQSxXQUFXO1lBQ2IsR0FBRyxDQUFBLENBQUMsSUFBSSxLQUFLLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxtQkFBbUIsR0FBRSxFQUFFLENBQUM7Z0JBQzdCLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLElBQUksR0FBQyxHQUFHLEdBQUMsS0FBSyxDQUFDO3FCQUMvQyxJQUFJLENBQUMsVUFBQSxXQUFXO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxDQUFDO29CQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsR0FBRSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUN0RCxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNwQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7b0JBQzNELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFDM0QsS0FBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDMUQsQ0FBQyxDQUFDLENBQUE7WUFDTixDQUFDO1FBQ0wsQ0FBQyxDQUNBO2FBQ0EsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCLENBQUMsQ0FBQTtJQUN2RCxDQUFDO0lBRUQsK0NBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQW5EUSxtQkFBbUI7UUFOL0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztZQUN6QyxXQUFXLEVBQUUsNkJBQTZCO1NBQzdDLENBQUM7aURBSzhCLGVBQU0sRUFBZ0IsV0FBSTtPQUo3QyxtQkFBbUIsQ0FvRC9CO0lBQUQsMEJBQUM7Q0FBQSxBQXBERCxJQW9EQztBQXBEWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG5pbXBvcnQgeyBpbml0RmlyZWJhc2VNZXNzYWdpbmcgfSBmcm9tICduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL21lc3NhZ2luZy9tZXNzYWdpbmcnO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxuaW1wb3J0IHtVc2VyfSBmcm9tIFwiLi4vdXNlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvbW90aW9uc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9wcm9tb3Rpb25zLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBjb21wYW55UHJvbW90aW9uczogW3N0cmluZ1tdXSA9IFtbXV07XHJcbiAgICBwcm9tb3Rpb25zOiBbW3N0cmluZ1tdXV0gPSBbW1tdXV07XHJcbiAgICBpbmRpdmlkdWFsUHJvbW90aW9uOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSB1c2VyOiBVc2VyKSB7XHJcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cclxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJylcclxuICAgICAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICAgICAgICBmb3IodmFyIGl0ZW0gaW4gcmVzdWx0LnZhbHVlKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGFueVByb21vdGlvbnM9IFtbXV07XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvbXBhbnkgbmFtZTogXCIraXRlbSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFByb21vdGlvbnMoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21vdGlvbnMucHVzaCh0aGlzLmNvbXBhbnlQcm9tb3Rpb25zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICApXHJcbiAgICAgICAgLmNhdGNoKGVycm9yPT5jb25zb2xlLmxvZyhcIkVycm9yXCIrZXJyb3IpKVxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSwgNDAwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvbW90aW9ucyhpdGVtKXtcclxuICAgICAgICBcclxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJytpdGVtKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0UHJvbW89PntcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIHByb21vIGluIHJlc3VsdFByb21vLnZhbHVlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uID1bXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy9wcm9tb3Rpb25zLycraXRlbSsnLycrcHJvbW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbmFsUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGFueSBOYW1lXCIraXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb21vTmFtZVwiKyBmaW5hbFJlc3VsdC52YWx1ZS5wcm9tb05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9tb0Rlc2NcIisgZmluYWxSZXN1bHQudmFsdWUucHJvbW9EZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uLnB1c2goZmluYWxSZXN1bHQudmFsdWUucHJvbW9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKGZpbmFsUmVzdWx0LnZhbHVlLnByb21vRGVzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnlQcm9tb3Rpb25zLnB1c2godGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJlcnJvclwiK2Vycm9yKSlcclxuICAgIH1cclxuXHJcbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XHJcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XHJcbiAgICB9XHJcbn1cclxuIl19