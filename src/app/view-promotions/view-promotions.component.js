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
            _this.promoInfo = [];
            _this.promoInfo.push(result.value.promoName);
            _this.promoInfo.push(result.value.promoDesc);
            _this.promotions.push(_this.promoInfo);
            _this.index++;
            _this.checkPromotions(length);
        });
    };
    ViewPromotionsComponent.prototype.onItemTap = function (args) {
        dialogs.alert({
            title: this.promotionsForList[args.index].promotionName,
            message: this.promotionsForList[args.index].promotionDesc,
            okButtonText: "OK"
        }).then(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELHNDQUFxQztBQUVyQyxpQ0FBbUM7QUFDbkMscURBQXVEO0FBQ3ZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBRXpEO0lBQ0ksbUJBQW1CLGFBQXFCLEVBQ3JCLGFBQXFCO1FBRHJCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQUcsQ0FBQztJQUNoRCxnQkFBQztBQUFELENBQUMsQUFIRCxJQUdDO0FBUUQ7SUFVSSxpQ0FBb0IsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQVJwQyxlQUFVLEdBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxVQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ1gsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUtOLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFDRCwwQ0FBUSxHQUFSO1FBQUEsaUJBUUM7UUFQRyx1Q0FBdUM7UUFDdkMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQzthQUM5RCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsS0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDckIsSUFBSSxNQUFNLEdBQUcsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzlCLEtBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsMkNBQVMsR0FBVDtRQUNJLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNmLEdBQUcsQ0FBQSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixNQUFNLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFDRCxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxpREFBZSxHQUFmLFVBQWdCLE1BQU07UUFDbEIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQztRQUNELElBQUksQ0FBQSxDQUFDO1lBQ0QsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO2dCQUM3QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFaEcsQ0FBQztZQUNELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUVqQyxDQUFDO0lBQ0wsQ0FBQztJQUNELG1EQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCwrQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUFwQixpQkFVQztRQVRHLFFBQVEsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLEdBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDbkYsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNSLEtBQUksQ0FBQyxTQUFTLEdBQUUsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwyQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUVWLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDVixLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhO1lBQ3ZELE9BQU8sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWE7WUFDekQsWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQXZFUSx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1lBQzlDLFdBQVcsRUFBRSxrQ0FBa0M7U0FDbEQsQ0FBQztpREFXK0IsaUJBQU87T0FWM0IsdUJBQXVCLENBd0VuQztJQUFELDhCQUFDO0NBQUEsQUF4RUQsSUF3RUM7QUF4RVksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ29tcGFueSB9IGZyb20gXCIuLi9jb21wYW55XCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3NcIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5cbmNsYXNzIFByb21vdGlvbiB7XG4gICAgY29uc3RydWN0b3IocHVibGljIHByb21vdGlvbk5hbWU6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBwdWJsaWMgcHJvbW90aW9uRGVzYzogc3RyaW5nKSB7fVxufVxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJWaWV3UHJvbW90aW9uc1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL3ZpZXctcHJvbW90aW9ucy5jb21wb25lbnQuY3NzXCJdLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vdmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgVmlld1Byb21vdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgcHJvbW90aW9uczogW3N0cmluZ1tdXSA9W1tdXTtcbiAgICBwcm9tb0luZm86IHN0cmluZ1tdID0gW107XG4gICAgcmVzdWx0ID0gbnVsbDtcbiAgICBpdGVtcyA9IFtdO1xuICAgIGluZGV4ID0gMDtcbiAgICBwcm9tb3Rpb25zRm9yTGlzdDogQXJyYXk8UHJvbW90aW9uPjtcbiAgICBjb21wYW55TmFtZTogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW55OiBDb21wYW55KSB7XG4gICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jb21wYW55TmFtZSA9IHRoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvcHJvbW90aW9ucy8nK3RoaXMuY29tcGFueS5nZXRDb21wYW55TmFtZSgpKVxuICAgICAgICAudGhlbihyZXN1bHQgPT57XG4gICAgICAgICAgICB0aGlzLnJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgICAgIHZhciBsZW5ndGggPSB0aGlzLmdldExlbmd0aCgpO1xuICAgICAgICAgICAgdGhpcy5jaGVja1Byb21vdGlvbnMobGVuZ3RoKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBnZXRMZW5ndGgoKXtcbiAgICAgICAgdmFyIGxlbmd0aCA9IDA7XG4gICAgICAgIGZvcih2YXIgaXRlbSBpbiB0aGlzLnJlc3VsdC52YWx1ZSl7XG4gICAgICAgICAgICB0aGlzLml0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cblxuICAgIGNoZWNrUHJvbW90aW9ucyhsZW5ndGgpe1xuICAgICAgICBpZih0aGlzLmluZGV4PGxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmdldFByb21vdGlvbnMobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucHJvbW90aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QudW5zaGlmdChuZXcgUHJvbW90aW9uKHRoaXMucHJvbW90aW9uc1tpXVswXSwgdGhpcy5wcm9tb3Rpb25zW2ldWzFdKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb21vdGlvbnNGb3JMaXN0LnBvcCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvbW90aW9ucyhsZW5ndGgpe1xuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJyt0aGlzLmNvbXBhbnkuZ2V0Q29tcGFueU5hbWUoKSsnLycrdGhpcy5pdGVtcy5wb3AoKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICB0aGlzLnByb21vSW5mbyA9W107XG4gICAgICAgICAgICB0aGlzLnByb21vSW5mby5wdXNoKHJlc3VsdC52YWx1ZS5wcm9tb05hbWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9tb0luZm8ucHVzaChyZXN1bHQudmFsdWUucHJvbW9EZXNjKTtcbiAgICAgICAgICAgIHRoaXMucHJvbW90aW9ucy5wdXNoKHRoaXMucHJvbW9JbmZvKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9tb3Rpb25zKGxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgXG4gICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgdGl0bGU6IHRoaXMucHJvbW90aW9uc0Zvckxpc3RbYXJncy5pbmRleF0ucHJvbW90aW9uTmFtZSxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMucHJvbW90aW9uc0Zvckxpc3RbYXJncy5pbmRleF0ucHJvbW90aW9uRGVzYyxcbiAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==