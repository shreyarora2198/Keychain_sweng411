"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var company_1 = require("../company");
var app = require("application");
var dialogs = require("tns-core-modules/ui/dialogs");
var firebase = require("nativescript-plugin-firebase");
var Promotion = /** @class */ (function () {
    function Promotion(promotionName, promotionDesc) {
        this.promotionName = promotionName;
        this.promotionDesc = promotionDesc;
    }
    return Promotion;
}());
var ViewPromotionsComponent = /** @class */ (function () {
    function ViewPromotionsComponent(company) {
        this.company = company;
        this.promotions = [[]];
        this.promoInfo = [];
        this.result = null;
        this.items = [];
        this.index = 0;
        // Use the component constructor to inject providers.
        this.promotionsForList = [];
        this.companyName = this.company.getCompanyName();
    }
    ViewPromotionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Init your component properties here.
        firebase.getValue('/promotions/' + this.company.getCompanyName())
            .then(function (result) {
            _this.result = result;
            var length = _this.getLength();
            _this.checkPromotions(length);
        });
    };
    ViewPromotionsComponent.prototype.getLength = function () {
        var length = 0;
        for (var item in this.result.value) {
            this.items.push(item);
            console.log("item" + item);
            length++;
        }
        return length;
    };
    ViewPromotionsComponent.prototype.checkPromotions = function (length) {
        if (this.index < length) {
            this.getPromotions(length);
        }
        else {
            for (var i = 0; i < this.promotions.length; i++) {
                this.promotionsForList.unshift(new Promotion(this.promotions[i][0], this.promotions[i][1]));
            }
            this.promotionsForList.pop();
        }
    };
    ViewPromotionsComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ViewPromotionsComponent.prototype.getPromotions = function (length) {
        var _this = this;
        firebase.getValue('/promotions/' + this.company.getCompanyName() + '/' + this.items.pop())
            .then(function (result) {
            console.log("company" + _this.company.getCompanyName());
            _this.promoInfo = [];
            _this.promoInfo.push(result.value.promoName);
            _this.promoInfo.push(result.value.promoDesc);
            _this.promotions.push(_this.promoInfo);
            _this.index++;
            _this.checkPromotions(length);
        });
    };
    ViewPromotionsComponent.prototype.onItemTap = function (args) {
        console.log("Item Tapped at cell index: " + args.index);
        dialogs.alert({
            title: this.promotionsForList[args.index].promotionName,
            message: this.promotionsForList[args.index].promotionDesc,
            okButtonText: "OK"
        }).then(function () {
            console.log("Dialog closed!");
        });
    };
    ViewPromotionsComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "ViewPromotions",
            moduleId: module.id,
            styleUrls: ["./view-promotions.component.css"],
            templateUrl: "./view-promotions.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [company_1.Company])
    ], ViewPromotionsComponent);
    return ViewPromotionsComponent;
}());
exports.ViewPromotionsComponent = ViewPromotionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELHNDQUFxQztBQUVyQyxpQ0FBbUM7QUFDbkMscURBQXVEO0FBQ3ZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQ0ksbUJBQW1CLGFBQXFCLEVBQ3JCLGFBQXFCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQztJQUNoRCxnQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBUUQ7SUFVSSxpQ0FBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVJwQyxlQUFVLEdBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUtOLHFEQUFxRDtRQUNyRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsMENBQVEsR0FBUjtRQUFBLGlCQVFDO1FBUEcsdUNBQXVDO1FBQ3ZDLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7YUFDOUQsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLElBQUksTUFBTSxHQUFHLEtBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM5QixL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QUMsYUFBYTtZQUN6RCxZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQTVFUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzlDLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQztpREFXK0IsaUJBQU87T0FWM0IsdUJBQXVCLENBNkVuQztJQUFELDhCQUFDO0NBQUEsQUE3RUQsSUE2RUM7QUE3RVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gXCIuLi9jb21wYW55XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNsYXNzIFByb21vdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb21vdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcHJvbW90aW9uRGVzYzogc3RyaW5nKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJWaWV3UHJvbW90aW9uc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3ZpZXctcHJvbW90aW9ucy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVmlld1Byb21vdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJvbW90aW9uczogW3N0cmluZ1tdXSA9W1tdXTtcbiAgICBwcm9tb0luZm86IHN0cmluZ1tdID0gW107XG4gICAgcmVzdWx0ID0gbnVsbDtcbiAgICBpdGVtcyA9IFtdO1xuICAgIGluZGV4ID0gMDtcbiAgICBwcm9tb3Rpb25zRm9yTGlzdDogQXJyYXk8UHJvbW90aW9uPjtcbiAgICBjb21wYW55TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW55OiBDb21wYW55KSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wYW55TmFtZSA9IHRoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvcHJvbW90aW9ucy8nK3RoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpKVxuICAgICAgICAudGhlbihyZXN1bHQgPT57XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Byb21vdGlvbnMobGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKXtcbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgICAgIGZvcih2YXIgaXRlbSBpbiB0aGlzLnJlc3VsdC52YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1cIitpdGVtKTtcbiAgICAgICAgICAgIGxlbmd0aCsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZW5ndGg7XG4gICAgfVxuXG4gICAgY2hlY2tQcm9tb3Rpb25zKGxlbmd0aCl7XG4gICAgICAgIGlmKHRoaXMuaW5kZXg8bGVuZ3RoKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvbW90aW9ucyhsZW5ndGgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9tb3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9tb3Rpb25zRm9yTGlzdC51bnNoaWZ0KG5ldyBQcm9tb3Rpb24odGhpcy5wcm9tb3Rpb25zW2ldWzBdLCB0aGlzLnByb21vdGlvbnNbaV1bMV0pKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QucG9wKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICBnZXRQcm9tb3Rpb25zKGxlbmd0aCl7XG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvcHJvbW90aW9ucy8nK3RoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpKycvJyt0aGlzLml0ZW1zLnBvcCgpKVxuICAgICAgICAudGhlbihyZXN1bHQ9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29tcGFueVwiK3RoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpKTtcbiAgICAgICAgICAgIHRoaXMucHJvbW9JbmZvID1bXTtcbiAgICAgICAgICAgIHRoaXMucHJvbW9JbmZvLnB1c2gocmVzdWx0LnZhbHVlLnByb21vTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnByb21vSW5mby5wdXNoKHJlc3VsdC52YWx1ZS5wcm9tb0Rlc2MpO1xuICAgICAgICAgICAgdGhpcy5wcm9tb3Rpb25zLnB1c2godGhpcy5wcm9tb0luZm8pO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Byb21vdGlvbnMobGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBvbkl0ZW1UYXAoYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkl0ZW0gVGFwcGVkIGF0IGNlbGwgaW5kZXg6IFwiICsgYXJncy5pbmRleCk7XG4gICAgICAgIFxuICAgICAgICBkaWFsb2dzLmFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiB0aGlzLnByb21vdGlvbnNGb3JMaXN0W2FyZ3MuaW5kZXhdLnByb21vdGlvbk5hbWUsXG4gICAgICAgICAgICBtZXNzYWdlOiB0aGlzLnByb21vdGlvbnNGb3JMaXN0W2FyZ3MuaW5kZXhdLnByb21vdGlvbkRlc2MsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6IFwiT0tcIlxuICAgICAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19