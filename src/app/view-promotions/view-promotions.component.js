"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var company_1 = require("../company");
var app = require("application");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctcHJvbW90aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtEO0FBQ2xELHNDQUFxQztBQUVyQyxpQ0FBbUM7QUFDbkMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFFekQ7SUFDSSxtQkFBbUIsYUFBcUIsRUFDckIsYUFBcUI7UUFEckIsa0JBQWEsR0FBYixhQUFhLENBQVE7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFBRyxDQUFDO0lBQ2hELGdCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFRRDtJQVNJLGlDQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBUHBDLGVBQVUsR0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdCLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBSU4scURBQXFEO1FBQ3JELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNELDBDQUFRLEdBQVI7UUFBQSxpQkFRQztRQVBHLHVDQUF1QztRQUN2QyxRQUFRLENBQUMsUUFBUSxDQUFDLGNBQWMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzlELElBQUksQ0FBQyxVQUFBLE1BQU07WUFDUixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztZQUNyQixJQUFJLE1BQU0sR0FBRyxLQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDOUIsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCwyQ0FBUyxHQUFUO1FBQ0ksSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBQ2YsR0FBRyxDQUFBLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3pCLE1BQU0sRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUNELE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELGlEQUFlLEdBQWYsVUFBZ0IsTUFBTTtRQUNsQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxDQUFBLENBQUM7WUFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0QsSUFBSSxDQUFBLENBQUM7WUFDRCxHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7Z0JBQzdDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUVoRyxDQUFDO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxDQUFDO1FBRWpDLENBQUM7SUFDTCxDQUFDO0lBQ0QsbURBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELCtDQUFhLEdBQWIsVUFBYyxNQUFNO1FBQXBCLGlCQVdDO1FBVkcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUNuRixJQUFJLENBQUMsVUFBQSxNQUFNO1lBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1lBQ3JELEtBQUksQ0FBQyxTQUFTLEdBQUUsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1QyxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsS0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsS0FBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE5RFEsdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxXQUFXLEVBQUUsa0NBQWtDO1NBQ2xELENBQUM7aURBVStCLGlCQUFPO09BVDNCLHVCQUF1QixDQStEbkM7SUFBRCw4QkFBQztDQUFBLEFBL0RELElBK0RDO0FBL0RZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbXBhbnkgfSBmcm9tIFwiLi4vY29tcGFueVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcblxuY2xhc3MgUHJvbW90aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcHJvbW90aW9uTmFtZTogc3RyaW5nLFxuICAgICAgICAgICAgICAgIHB1YmxpYyBwcm9tb3Rpb25EZXNjOiBzdHJpbmcpIHt9XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlZpZXdQcm9tb3Rpb25zXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vdmlldy1wcm9tb3Rpb25zLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi92aWV3LXByb21vdGlvbnMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBWaWV3UHJvbW90aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBwcm9tb3Rpb25zOiBbc3RyaW5nW11dID1bW11dO1xuICAgIHByb21vSW5mbzogc3RyaW5nW10gPSBbXTtcbiAgICByZXN1bHQgPSBudWxsO1xuICAgIGl0ZW1zID0gW107XG4gICAgaW5kZXggPSAwO1xuICAgIHByb21vdGlvbnNGb3JMaXN0OiBBcnJheTxQcm9tb3Rpb24+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wYW55OiBDb21wYW55KSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QgPSBbXTtcbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJyt0aGlzLmNvbXBhbnkuZ2V0Q29tcGFueU5hbWUoKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0ID0+e1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5nZXRMZW5ndGgoKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9tb3Rpb25zKGxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZ2V0TGVuZ3RoKCl7XG4gICAgICAgIHZhciBsZW5ndGggPSAwO1xuICAgICAgICBmb3IodmFyIGl0ZW0gaW4gdGhpcy5yZXN1bHQudmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJpdGVtXCIraXRlbSk7XG4gICAgICAgICAgICBsZW5ndGgrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xuICAgIH1cblxuICAgIGNoZWNrUHJvbW90aW9ucyhsZW5ndGgpe1xuICAgICAgICBpZih0aGlzLmluZGV4PGxlbmd0aCl7XG4gICAgICAgICAgICB0aGlzLmdldFByb21vdGlvbnMobGVuZ3RoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMucHJvbW90aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvbW90aW9uc0Zvckxpc3QudW5zaGlmdChuZXcgUHJvbW90aW9uKHRoaXMucHJvbW90aW9uc1tpXVswXSwgdGhpcy5wcm9tb3Rpb25zW2ldWzFdKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnByb21vdGlvbnNGb3JMaXN0LnBvcCgpO1xuXG4gICAgICAgIH1cbiAgICB9XG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgZ2V0UHJvbW90aW9ucyhsZW5ndGgpe1xuICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL3Byb21vdGlvbnMvJyt0aGlzLmNvbXBhbnkuZ2V0Q29tcGFueU5hbWUoKSsnLycrdGhpcy5pdGVtcy5wb3AoKSlcbiAgICAgICAgLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBhbnlcIit0aGlzLmNvbXBhbnkuZ2V0Q29tcGFueU5hbWUoKSk7XG4gICAgICAgICAgICB0aGlzLnByb21vSW5mbyA9W107XG4gICAgICAgICAgICB0aGlzLnByb21vSW5mby5wdXNoKHJlc3VsdC52YWx1ZS5wcm9tb05hbWUpO1xuICAgICAgICAgICAgdGhpcy5wcm9tb0luZm8ucHVzaChyZXN1bHQudmFsdWUucHJvbW9EZXNjKTtcbiAgICAgICAgICAgIHRoaXMucHJvbW90aW9ucy5wdXNoKHRoaXMucHJvbW9JbmZvKTtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIHRoaXMuY2hlY2tQcm9tb3Rpb25zKGxlbmd0aCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19