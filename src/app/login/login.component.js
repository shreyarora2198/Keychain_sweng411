"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var page;
var password;
var email;
var authResult;
// let pageLoaded = (args) =>{
//     let page = <Page>args.object;
//     let password = <TextField>page.getViewById("password");
//     let login =<Button>page.getViewById("login");
//     login.on('tap',function(args: EventData){
//         console.log(password)
//     });
// }
// export { pageLoaded }
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.user = new user_model_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.pageLoaded = function (args) {
        page = args.object;
        password = page.getViewById("password");
        email = page.getViewById("email");
        console.log(page);
    };
    LoginComponent.prototype.routeKeychainCard = function () {
        var _this = this;
        console.log(password.text);
        console.log(email.text);
        // to store a JSON object
        // firebase.setValue(
        //     '/companies',
        //     {foo:'bar'}
        // );
        // to store an array of JSON objects
        firebase.setValue('/users', [
            { name: email.text, country: password.text }
        ]);
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: email.text,
                password: password.text
            }
        })
            .then(function (result) {
            _this.router.navigate(["/cards"]);
            authResult = JSON.stringify(result);
        })
            .catch(function (error) { return console.log(error + " lol"); });
        this.router.navigate(["/cards"])
        // result => JSON.stringify(result)+" ali g"

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFRL0I7SUFFSSx3QkFBb0IsTUFBYyxFQUNkLElBQVU7UUFEVixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUMxQixxREFBcUQ7SUFDekQsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELDBDQUFpQixHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBbEJRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBRzhCLGVBQU07WUFDUixXQUFJO09BSHJCLGNBQWMsQ0FtQjFCO0lBQUQscUJBQUM7Q0FBQSxBQW5CRCxJQW1CQztBQW5CWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiTG9naW5cIixcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzdHlsZVVybHM6IFtcIi4vbG9naW4uY29tcG9uZW50LmNzc1wiXSxcclxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbG9naW4uY29tcG9uZW50Lmh0bWxcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIHVzZXI6IFVzZXIpIHtcclxuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgIHRoaXMudXNlci5zZXRVc2VySWQoXCIxMjM0NTY3ODlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVLZXljaGFpbkNhcmQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhcmRzXCJdKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZVNpZ251cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcclxuICAgIH1cclxufSJdfQ==
