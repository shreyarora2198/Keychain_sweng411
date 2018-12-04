"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var KeychainCardClass = /** @class */ (function () {
    function KeychainCardClass() {
    }
    KeychainCardClass.prototype.setBarcodeId = function (iBarcodeId) {
        this.barcodeId = iBarcodeId;
    };
    KeychainCardClass.prototype.getBarcodeId = function () {
        return this.barcodeId;
    };
    KeychainCardClass.prototype.setBarcodeFormat = function (iBarcodeFormat) {
        this.barcodeFormat = iBarcodeFormat;
    };
    KeychainCardClass.prototype.getBarcodeFormat = function () {
        return this.barcodeFormat;
    };
    KeychainCardClass.prototype.setCardLocation = function (iCardLoc) {
        this.cardLoc = iCardLoc;
    };
    KeychainCardClass.prototype.getCardLocation = function () {
        return this.cardLoc;
    };
    KeychainCardClass.prototype.setCardName = function (iCardName) {
        this.cardName = iCardName;
    };
    KeychainCardClass.prototype.getCardName = function () {
        return this.cardName;
    };
    KeychainCardClass = tslib_1.__decorate([
        core_1.Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], KeychainCardClass);
    return KeychainCardClass;
}());
exports.KeychainCardClass = KeychainCardClass;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2V5Y2hhaW4tY2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImtleWNoYWluLWNhcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJDO0FBRzNDO0lBTUk7SUFBZSxDQUFDO0lBRWhCLHdDQUFZLEdBQVosVUFBYSxVQUFrQjtRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQVksR0FBWjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCw0Q0FBZ0IsR0FBaEIsVUFBaUIsY0FBc0I7UUFDbkMsSUFBSSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUM7SUFDeEMsQ0FBQztJQUVELDRDQUFnQixHQUFoQjtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzlCLENBQUM7SUFFRCwyQ0FBZSxHQUFmLFVBQWdCLFFBQWdCO1FBQzVCLElBQUksQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO0lBQzVCLENBQUM7SUFFRCwyQ0FBZSxHQUFmO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQUVELHVDQUFXLEdBQVgsVUFBWSxTQUFpQjtRQUN6QixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUF0Q1EsaUJBQWlCO1FBRDdCLGlCQUFVLEVBQUU7O09BQ0EsaUJBQWlCLENBdUM3QjtJQUFELHdCQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBLZXljaGFpbkNhcmRDbGFzcyB7XG4gICAgcHJpdmF0ZSBiYXJjb2RlSWQ6IHN0cmluZztcbiAgICBwcml2YXRlIGJhcmNvZGVGb3JtYXQ6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmRMb2M6IHN0cmluZztcbiAgICBwcml2YXRlIGNhcmROYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgICBzZXRCYXJjb2RlSWQoaUJhcmNvZGVJZDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYmFyY29kZUlkID0gaUJhcmNvZGVJZDtcbiAgICB9XG5cbiAgICBnZXRCYXJjb2RlSWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhcmNvZGVJZDtcbiAgICB9XG5cbiAgICBzZXRCYXJjb2RlRm9ybWF0KGlCYXJjb2RlRm9ybWF0OiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmJhcmNvZGVGb3JtYXQgPSBpQmFyY29kZUZvcm1hdDtcbiAgICB9XG5cbiAgICBnZXRCYXJjb2RlRm9ybWF0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLmJhcmNvZGVGb3JtYXQ7XG4gICAgfVxuXG4gICAgc2V0Q2FyZExvY2F0aW9uKGlDYXJkTG9jOiBzdHJpbmcpe1xuICAgICAgICB0aGlzLmNhcmRMb2MgPSBpQ2FyZExvYztcbiAgICB9XG5cbiAgICBnZXRDYXJkTG9jYXRpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FyZExvYztcbiAgICB9XG5cbiAgICBzZXRDYXJkTmFtZShpQ2FyZE5hbWU6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuY2FyZE5hbWUgPSBpQ2FyZE5hbWU7XG4gICAgfVxuICAgIFxuICAgIGdldENhcmROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNhcmROYW1lO1xuICAgIH1cbn0iXX0=