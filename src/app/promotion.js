"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var PromotionClass = /** @class */ (function () {
    function PromotionClass() {
        this.companyPromotions = [[]];
    }
    PromotionClass.prototype.setCompanyName = function (iCompanyName) {
        this.companyName = iCompanyName;
    };
    PromotionClass.prototype.getCompanyName = function () {
        return this.companyName;
    };
    PromotionClass.prototype.setCompanyPromotions = function (iCompanyPromotions) {
        this.companyPromotions = iCompanyPromotions;
    };
    PromotionClass.prototype.getCompanyPromotions = function () {
        return this.companyPromotions;
    };
    PromotionClass = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], PromotionClass);
    return PromotionClass;
}());
exports.PromotionClass = PromotionClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvbW90aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvbW90aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyQztBQUczQztJQUlJO1FBRlEsc0JBQWlCLEdBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUU5QixDQUFDO0lBRWhCLHVDQUFjLEdBQWQsVUFBZSxZQUFvQjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUNBQWMsR0FBZDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzVCLENBQUM7SUFFRCw2Q0FBb0IsR0FBcEIsVUFBcUIsa0JBQThCO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxrQkFBa0IsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsNkNBQW9CLEdBQXBCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQztJQUNsQyxDQUFDO0lBcEJRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTs7T0FDQSxjQUFjLENBcUIxQjtJQUFELHFCQUFDO0NBQUEsQUFyQkQsSUFxQkM7QUFyQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb21vdGlvbkNsYXNzIHtcbiAgICBwcml2YXRlIGNvbXBhbnlOYW1lOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSBjb21wYW55UHJvbW90aW9uczogW3N0cmluZ1tdXSA9IFtbXV07XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRDb21wYW55TmFtZShpQ29tcGFueU5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLmNvbXBhbnlOYW1lID0gaUNvbXBhbnlOYW1lO1xuICAgIH1cbiAgICBcbiAgICBnZXRDb21wYW55TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFueU5hbWU7XG4gICAgfVxuXG4gICAgc2V0Q29tcGFueVByb21vdGlvbnMoaUNvbXBhbnlQcm9tb3Rpb25zOiBbc3RyaW5nW11dKSB7XG4gICAgICAgIHRoaXMuY29tcGFueVByb21vdGlvbnMgPSBpQ29tcGFueVByb21vdGlvbnNcbiAgICB9XG4gICAgXG4gICAgZ2V0Q29tcGFueVByb21vdGlvbnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhbnlQcm9tb3Rpb25zO1xuICAgIH1cbn0iXX0=