"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var app = require("application");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var user_1 = require("../user");
var promotion_1 = require("../promotion");
var router_1 = require("@angular/router");
var Promotion = /** @class */ (function () {
    function Promotion(companyName) {
        this.companyName = companyName;
    }
    return Promotion;
}());
var PromotionsComponent = /** @class */ (function () {
    function PromotionsComponent(router, user, promotionclass) {
        this.router = router;
        this.user = user;
        this.promotionclass = promotionclass;
        this.companyPromotions = [[]];
        this.promotions = [[[]]];
        this.individualPromotion = [];
        this.promotionsForList = [];
    }
    PromotionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        firebase.getValue('/promotions/')
            .then(function (result) {
            for (var item in result.value) {
                while (_this.companyPromotions.length > 0) {
                    _this.companyPromotions.pop();
                }
                // console.log("company name: "+item);
                _this.getPromotions(item);
                _this.promotions.unshift(_this.companyPromotions);
            }
        })
            .catch(function (error) { return console.log("Error" + error); });
        setTimeout(function () {
            for (var i = 0; i < _this.promotions.length; i++) {
                //console.log(this.promotions[0][0][0]);
                _this.promotionsForList.push(new Promotion(_this.promotions[i][0][0]));
            }
        }, 1000);
    };
    PromotionsComponent.prototype.getPromotions = function (item) {
        var _this = this;
        firebase.getValue('/promotions/' + item)
            .then(function (resultPromo) {
            for (var promo in resultPromo.value) {
                while (_this.individualPromotion.length > 0) {
                    _this.individualPromotion.pop();
                }
                firebase.getValue('/promotions/' + item + '/' + promo)
                    .then(function (finalResult) {
                    console.log("company Name" + item);
                    console.log("promoName" + finalResult.value.promoName);
                    console.log("promoDesc" + finalResult.value.promoDesc);
                    _this.individualPromotion.push(item);
                    _this.individualPromotion.push(finalResult.value.promoName);
                    _this.individualPromotion.push(finalResult.value.promoDesc);
                    _this.companyPromotions.push(_this.individualPromotion);
                    for (var i = 1; i < _this.companyPromotions.length; i++) {
                        for (var j = 1; j < 4; j++) {
                            console.log("test1: " + _this.companyPromotions[i][j]);
                            console.log("test2: " + _this.companyPromotions.length);
                        }
                    }
                });
            }
        })
            .catch(function (error) { return console.log("error" + error); });
    };
    PromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    PromotionsComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
        this.promotionclass.setCompanyName(this.promotions[args.index][0][0]);
        this.promotionclass.setCompanyPromotions(this.promotions[args.index]);
        //this.router.navigate(["/view-card"]);
    };
    PromotionsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Promotions",
            moduleId: module.id,
            styleUrls: ["./promotions.component.css"],
            templateUrl: "./promotions.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            user_1.User,
            promotion_1.PromotionClass])
    ], PromotionsComponent);
    return PromotionsComponent;
}());
exports.PromotionsComponent = PromotionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9tb3Rpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzQ0FBa0Q7QUFDbEQsaUNBQW1DO0FBR25DLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBQ25FLGdDQUE2QjtBQUM3QiwwQ0FBOEM7QUFDOUMsMENBQXlDO0FBRXpDO0lBQ0ksbUJBQW1CLFdBQW1CO1FBQW5CLGdCQUFXLEdBQVgsV0FBVyxDQUFRO0lBQUksQ0FBQztJQUMvQyxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBUUQ7SUFRSSw2QkFBb0IsTUFBYyxFQUNkLElBQVUsRUFDVixjQUE4QjtRQUY5QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQVJsRCxzQkFBaUIsR0FBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLGVBQVUsR0FBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEMsd0JBQW1CLEdBQWEsRUFBRSxDQUFDO1FBTy9CLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFxQkM7UUFwQkcsdUNBQXVDO1FBQ3ZDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO2FBQ2hDLElBQUksQ0FBQyxVQUFDLE1BQU07WUFDVCxHQUFHLENBQUEsQ0FBQyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztnQkFDMUIsT0FBTSxLQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO29CQUN0QyxLQUFJ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bml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbmltcG9ydCB7IGluaXRGaXJlYmFzZU1lc3NhZ2luZyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvbWVzc2FnaW5nL21lc3NhZ2luZyc7XHJcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xyXG5pbXBvcnQge1VzZXJ9IGZyb20gXCIuLi91c2VyXCI7XHJcbmltcG9ydCB7IFByb21vdGlvbkNsYXNzIH0gZnJvbSBcIi4uL3Byb21vdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5jbGFzcyBQcm9tb3Rpb257XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgY29tcGFueU5hbWU6IHN0cmluZykgeyB9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiUHJvbW90aW9uc1wiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9wcm9tb3Rpb25zLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL3Byb21vdGlvbnMuY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJvbW90aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gICAgY29tcGFueVByb21vdGlvbnM6IFtzdHJpbmdbXV0gPSBbW11dO1xyXG4gICAgcHJvbW90aW9uczogW1tzdHJpbmdbXV1dID0gW1tbXV1dO1xyXG4gICAgaW5kaXZpZHVhbFByb21vdGlvbjogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcHJvbW90aW9uc0Zvckxpc3Q6IEFycmF5PFByb21vdGlvbj47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgdXNlcjogVXNlcixcclxuICAgICAgICAgICAgICAgIHByaXZhdGUgcHJvbW90aW9uY2xhc3M6IFByb21vdGlvbkNsYXNzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25zRm9yTGlzdCA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvcHJvbW90aW9ucy8nKVxyXG4gICAgICAgIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgICAgICAgIGZvcih2YXIgaXRlbSBpbiByZXN1bHQudmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgd2hpbGUodGhpcy5jb21wYW55UHJvbW90aW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYW55UHJvbW90aW9ucy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29tcGFueSBuYW1lOiBcIitpdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvbW90aW9ucyhpdGVtKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvbW90aW9ucy51bnNoaWZ0KHRoaXMuY29tcGFueVByb21vdGlvbnMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goZXJyb3I9PmNvbnNvbGUubG9nKFwiRXJyb3JcIitlcnJvcikpXHJcbiAgICAgICAgc2V0VGltZW91dCgoKT0+e1xyXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwO2kgPCB0aGlzLnByb21vdGlvbnMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucHJvbW90aW9uc1swXVswXVswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb21vdGlvbnNGb3JMaXN0LnB1c2gobmV3IFByb21vdGlvbih0aGlzLnByb21vdGlvbnNbaV1bMF1bMF0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb21vdGlvbnMoaXRlbSl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy9wcm9tb3Rpb25zLycraXRlbSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdFByb21vPT57XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBwcm9tbyBpbiByZXN1bHRQcm9tby52YWx1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlKHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGl2aWR1YWxQcm9tb3Rpb24ucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZWJhc2UuZ2V0VmFsdWUoJy9wcm9tb3Rpb25zLycraXRlbSsnLycrcHJvbW8pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKGZpbmFsUmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGFueSBOYW1lXCIraXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInByb21vTmFtZVwiKyBmaW5hbFJlc3VsdC52YWx1ZS5wcm9tb05hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJwcm9tb0Rlc2NcIisgZmluYWxSZXN1bHQudmFsdWUucHJvbW9EZXNjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uLnB1c2goZmluYWxSZXN1bHQudmFsdWUucHJvbW9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kaXZpZHVhbFByb21vdGlvbi5wdXNoKGZpbmFsUmVzdWx0LnZhbHVlLnByb21vRGVzYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBhbnlQcm9tb3Rpb25zLnB1c2godGhpcy5pbmRpdmlkdWFsUHJvbW90aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0xOyBpPHRoaXMuY29tcGFueVByb21vdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MTsgajw0OyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MTogXCIgKyB0aGlzLmNvbXBhbnlQcm9tb3Rpb25zW2ldW2pdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXN0MjogXCIgKyB0aGlzLmNvbXBhbnlQcm9tb3Rpb25zLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcImVycm9yXCIrZXJyb3IpKVxyXG4gICAgfVxyXG5cclxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcclxuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25JdGVtVGFwKGFyZ3MpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XHJcbiAgICAgICAgdGhpcy5wcm9tb3Rpb25jbGFzcy5zZXRDb21wYW55TmFtZSh0aGlzLnByb21vdGlvbnNbYXJncy5pbmRleF1bMF1bMF0pO1xyXG4gICAgICAgIHRoaXMucHJvbW90aW9uY2xhc3Muc2V0Q29tcGFueVByb21vdGlvbnModGhpcy5wcm9tb3Rpb25zW2FyZ3MuaW5kZXhdKTtcclxuXHJcbiAgICAgICAgLy90aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvdmlldy1jYXJkXCJdKTtcclxuICAgIH1cclxufVxyXG4iXX0=