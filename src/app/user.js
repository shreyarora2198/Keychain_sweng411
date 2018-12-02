"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.setUserId = function (iUserId) {
        this.userId = iUserId;
    };
    User.prototype.getUserId = function () {
        return this.userId;
    };
    User.prototype.setCompany = function (company) {
        this.company = company;
    };
    User.prototype.getCompany = function () {
        return this.company;
    };
    User = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFHSTtJQUFlLENBQUM7SUFFaEIsd0JBQVMsR0FBVCxVQUFVLE9BQWU7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQUVELHdCQUFTLEdBQVQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN2QixDQUFDO0lBRUQseUJBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQzNCLENBQUM7SUFFRCx5QkFBVSxHQUFWO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQW5CUSxJQUFJO1FBRGhCLGlCQUFVLEVBQUU7O09BQ0EsSUFBSSxDQW9CaEI7SUFBRCxXQUFDO0NBQUEsQUFwQkQsSUFvQkM7QUFwQlksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHByaXZhdGUgdXNlcklkO1xuICAgIHByaXZhdGUgY29tcGFueTogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRVc2VySWQoaVVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudXNlcklkID0gaVVzZXJJZDtcbiAgICB9XG5cbiAgICBnZXRVc2VySWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnVzZXJJZDtcbiAgICB9XG5cbiAgICBzZXRDb21wYW55KGNvbXBhbnk6IGJvb2xlYW4pe1xuICAgICAgICB0aGlzLmNvbXBhbnkgPSBjb21wYW55O1xuICAgIH1cblxuICAgIGdldENvbXBhbnkoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGFueTtcbiAgICB9XG59Il19