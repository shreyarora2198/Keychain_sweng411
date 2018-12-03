"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, user) {
        this.router = router;
        this.user = user;
        this.email = "";
        this.password = "";
        this.uid = "";
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.pageLoaded = function (args) {

    };
    LoginComponent.prototype.routeKeychainCard = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: this.email,
                password: this.password
            }
        })
            .then(function (result) {
            _this.uid = JSON.stringify(result.uid);
            _this.user.setUserId(_this.uid);
            _this.user.setEmail(JSON.stringify(result.email));
            firebase.getValue('/companies/' + _this.uid)
                .then(function (result) {
                if (result.value === null) {
                    _this.user.setCompany(false);
                    _this.user.setCompanyName(null);
                }
                else {
                    _this.user.setCompany(true);
                    _this.user.setCompanyName(JSON.stringify(result.value.company));
                }
            })
                .catch(function (error) { return console.log("Error: " + error); });
            console.log("after login" + _this.user.getUserId());
            _this.router.navigate(["/cards"]);
        })
            .catch(function (error) { return console.log(error); });
            
    };
    LoginComponent.prototype.routeSignup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginComponent = tslib_1.__decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            styleUrls: ["./login.component.css"],
            templateUrl: "./login.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [router_1.Router,
            user_1.User])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBeUM7QUFDekMsZ0NBQStCO0FBSS9CLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBT25FO0lBSUksd0JBQW9CLE1BQWMsRUFDZCxJQUFVO1FBRFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFHYixxREFBcUQ7SUFDekQsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxJQUFlO0lBRTFCLENBQUM7SUFDRCwwQ0FBaUIsR0FBakI7UUFBQSxpQkE4QkM7UUE1QkcsUUFBUSxDQUFDLEtBQUssQ0FDVjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE1BQU07WUFDSSxLQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25DLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO1lBQ2hELFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFDLEtBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLEtBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2RSxDQUFDO1lBQ0QsQ0FBQyxDQUFDO2lCQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxFQUE5QixDQUE4QixDQUFDLENBQUM7WUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ25ELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUM7YUFDYixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWhEUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO2lEQUs4QixlQUFNO1lBQ1IsV0FBSTtPQUxyQixjQUFjLENBaUQxQjtJQUFELHFCQUFDO0NBQUEsQUFqREQsSUFpREM7QUFqRFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgd2FpdEZvck1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVtYWlsIDogc3RyaW5nID0gXCJcIjtcbiAgICBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgICB1aWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbiAgICBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG4gICAgcm91dGVLZXljaGFpbkNhcmQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5sb2dpbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpZD1KU09OLnN0cmluZ2lmeShyZXN1bHQudWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRVc2VySWQodGhpcy51aWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRFbWFpbChKU09OLnN0cmluZ2lmeShyZXN1bHQuZW1haWwpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvY29tcGFuaWVzLycrdGhpcy51aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRDb21wYW55KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRDb21wYW55TmFtZShudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRDb21wYW55KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyLnNldENvbXBhbnlOYW1lKEpTT04uc3RyaW5naWZ5KHJlc3VsdC52YWx1ZS5jb21wYW55KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImFmdGVyIGxvZ2luXCIgKyB0aGlzLnVzZXIuZ2V0VXNlcklkKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJkc1wiXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICAgIH1cblxuICAgIHJvdXRlU2lnbnVwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcbiAgICB9XG59Il19


