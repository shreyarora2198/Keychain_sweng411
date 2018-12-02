"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
            firebase.getValue('/companies/' + _this.uid)
                .then(function (result) {
                console.log(result);
                if (result.value === null) {
                    _this.user.setCompany(false);
                }
                else
                    _this.user.setCompany(true);
            })
                .catch(function (error) { return console.log("Error: " + error); });
            _this.router.navigate(["/cards"]);
        })
            .catch(function (error) { return console.log(error); });
    };
    LoginComponent.prototype.routeSignup = function () {
        this.router.navigate(["/signup"]);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            styleUrls: ["./login.component.css"],
            templateUrl: "./login.component.html"
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_1.User])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFJL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFPbkU7SUFJSSx3QkFBb0IsTUFBYyxFQUNkLElBQVU7UUFEVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUo5QixVQUFLLEdBQVksRUFBRSxDQUFDO1FBQ3BCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsUUFBRyxHQUFXLEVBQUUsQ0FBQztRQUdiLHFEQUFxRDtJQUN6RCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLElBQWU7SUFFMUIsQ0FBQztJQUNELDBDQUFpQixHQUFqQjtRQUFBLGlCQTBCQztRQXhCRyxRQUFRLENBQUMsS0FBSyxDQUNWO1lBQ0UsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUTtZQUNqQyxlQUFlLEVBQUU7Z0JBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO2dCQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEI7U0FDRixDQUFDO2FBQ0QsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNJLEtBQUksQ0FBQyxHQUFHLEdBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbkMsS0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFDLEtBQUksQ0FBQyxHQUFHLENBQUM7aUJBQ3hDLElBQUksQ0FBQyxVQUFBLE1BQU07Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDcEIsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsQ0FBQSxDQUFDO29CQUN0QixLQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEMsQ0FBQztnQkFDRCxJQUFJO29CQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRXBDLENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsQ0FBQyxDQUFDO1lBQ2hELEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQTtRQUNwQyxDQUFDLENBQUM7YUFDYixLQUFLLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFsQixDQUFrQixDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQTVDUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUs4QixlQUFNO1lBQ1IsV0FBSTtPQUxyQixjQUFjLENBNkMxQjtJQUFELHFCQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7QUE3Q1ksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgd2FpdEZvck1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmNvbnN0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGVtYWlsIDogc3RyaW5nID0gXCJcIjtcbiAgICBwYXNzd29yZDogc3RyaW5nID0gXCJcIjtcbiAgICB1aWQ6IHN0cmluZyA9IFwiXCI7XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIpIHtcbiAgICAgICAgLy8gVXNlIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdG8gaW5qZWN0IHByb3ZpZGVycy5cbiAgICB9XG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cbiAgICBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgICBcbiAgICB9XG4gICAgcm91dGVLZXljaGFpbkNhcmQoKTogdm9pZCB7XG4gICAgICAgIFxuICAgICAgICBmaXJlYmFzZS5sb2dpbihcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxuICAgICAgICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVpZD1KU09OLnN0cmluZ2lmeShyZXN1bHQudWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRVc2VySWQodGhpcy51aWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmdldFZhbHVlKCcvY29tcGFuaWVzLycrdGhpcy51aWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzdWx0LnZhbHVlID09PSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlci5zZXRDb21wYW55KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHRoaXMudXNlci5zZXRDb21wYW55KHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkVycm9yOiBcIiArIGVycm9yKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhcmRzXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XG4gICAgfVxuXG4gICAgcm91dGVTaWdudXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zaWdudXBcIl0pO1xuICAgIH1cbn0iXX0=