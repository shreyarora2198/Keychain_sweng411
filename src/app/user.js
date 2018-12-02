"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
    User.prototype.setCompanyName = function (companyName) {
        this.companyName = companyName;
    };
    User.prototype.getCompanyName = function () {
        return this.companyName;
    };
    User.prototype.setEmail = function (email) {
        this.email = email;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRzNDO0lBS0k7SUFBZSxDQUFDO0lBRWhCLHdCQUFTLEdBQVQsVUFBVSxPQUFlO1FBQ3JCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQzFCLENBQUM7SUFFRCx3QkFBUyxHQUFUO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxPQUFnQjtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3hCLENBQUM7SUFFRCw2QkFBYyxHQUFkLFVBQWUsV0FBbUI7UUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDbkMsQ0FBQztJQUVELDZCQUFjLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUM1QixDQUFDO0lBRUQsdUJBQVEsR0FBUixVQUFTLEtBQWE7UUFDbEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBckNRLElBQUk7UUFEaEIsaUJBQVUsRUFBRTs7T0FDQSxJQUFJLENBc0NoQjtJQUFELFdBQUM7Q0FBQSxBQXRDRCxJQXNDQztBQXRDWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlciB7XG4gICAgcHJpdmF0ZSB1c2VySWQ7XG4gICAgcHJpdmF0ZSBjb21wYW55OiBib29sZWFuO1xuICAgIHByaXZhdGUgY29tcGFueU5hbWU6IHN0cmluZztcbiAgICBwcml2YXRlIGVtYWlsOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgc2V0VXNlcklkKGlVc2VySWQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLnVzZXJJZCA9IGlVc2VySWQ7XG4gICAgfVxuXG4gICAgZ2V0VXNlcklkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy51c2VySWQ7XG4gICAgfVxuXG4gICAgc2V0Q29tcGFueShjb21wYW55OiBib29sZWFuKXtcbiAgICAgICAgdGhpcy5jb21wYW55ID0gY29tcGFueTtcbiAgICB9XG5cbiAgICBnZXRDb21wYW55KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBhbnk7XG4gICAgfVxuXG4gICAgc2V0Q29tcGFueU5hbWUoY29tcGFueU5hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuY29tcGFueU5hbWUgPSBjb21wYW55TmFtZTtcbiAgICB9XG5cbiAgICBnZXRDb21wYW55TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wYW55TmFtZTtcbiAgICB9XG5cbiAgICBzZXRFbWFpbChlbWFpbDogc3RyaW5nKXtcbiAgICAgICAgdGhpcy5lbWFpbCA9IGVtYWlsO1xuICAgIH1cbiAgICBcbiAgICBnZXRFbWFpbCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5lbWFpbDtcbiAgICB9XG59Il19