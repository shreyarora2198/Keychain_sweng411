"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_model_1 = require("../shared/user.model");
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
        // this.router.navigate(["/cards"])
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
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxtREFBNEM7QUFPNUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksS0FBSyxDQUFDO0FBQ1YsSUFBSSxVQUFVLENBQUM7QUFDZiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLDhEQUE4RDtBQUM5RCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELGdDQUFnQztBQUNoQyxVQUFVO0FBQ1YsSUFBSTtBQUNKLHdCQUF3QjtBQU94QjtJQUdJLHdCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksaUJBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDRCxpQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBRTNDLENBQUM7SUFDRCxtQ0FBVSxHQUFWLFVBQVcsSUFBZTtRQUN0QixJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN6QixRQUFRLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRCxLQUFLLEdBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDRCwwQ0FBaUIsR0FBakI7UUFBQSxpQkFpQ0M7UUFoQ0csT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEIseUJBQXlCO1FBQ3pCLHFCQUFxQjtRQUNyQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLEtBQUs7UUFFTCxvQ0FBb0M7UUFDcEMsUUFBUSxDQUFDLFFBQVEsQ0FDYixRQUFRLEVBQ1I7WUFDQSxFQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDO1NBQ3pDLENBQ0osQ0FBQztRQUNGLFFBQVEsQ0FBQyxLQUFLLENBQ1Y7WUFDRSxJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsS0FBSyxDQUFDLElBQUk7Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRLENBQUMsSUFBSTthQUN4QjtTQUNGLENBQUM7YUFDRCxJQUFJLENBQUMsVUFBQSxNQUFNO1lBQUssS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO1lBQ2pDLFVBQVUsR0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3JDLENBQUMsQ0FDUjthQUNKLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLE1BQU0sQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7UUFDN0MsbUNBQW1DO1FBRW5DLDRDQUE0QztJQUNwRCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBckRRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBSThCLGVBQU07T0FIekIsY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQge1RleHRGaWVsZH0gZnJvbSBcInVpL3RleHQtZmllbGRcIjtcclxuaW1wb3J0IHtCdXR0b259IGZyb20gXCJ1aS9idXR0b25cIjtcclxuaW1wb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyB3YWl0Rm9yTWFwIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlci9zcmMvdXRpbHMvY29sbGVjdGlvblwiO1xyXG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5jb25zdCBmaXJlYmFzZVdlYkFwaSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlL2FwcFwiKTtcclxubGV0IHBhZ2U7XHJcbmxldCBwYXNzd29yZDtcclxubGV0IGVtYWlsO1xyXG5sZXQgYXV0aFJlc3VsdDtcclxuLy8gbGV0IHBhZ2VMb2FkZWQgPSAoYXJncykgPT57XHJcbi8vICAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4vLyAgICAgbGV0IHBhc3N3b3JkID0gPFRleHRGaWVsZD5wYWdlLmdldFZpZXdCeUlkKFwicGFzc3dvcmRcIik7XHJcbi8vICAgICBsZXQgbG9naW4gPTxCdXR0b24+cGFnZS5nZXRWaWV3QnlJZChcImxvZ2luXCIpO1xyXG4vLyAgICAgbG9naW4ub24oJ3RhcCcsZnVuY3Rpb24oYXJnczogRXZlbnREYXRhKXtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZClcclxuLy8gICAgIH0pO1xyXG4vLyB9XHJcbi8vIGV4cG9ydCB7IHBhZ2VMb2FkZWQgfVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcIkxvZ2luXCIsXHJcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2xvZ2luLmNvbXBvbmVudC5odG1sXCJcclxufSlcclxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHVzZXI6IFVzZXI7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXIgPSBuZXcgVXNlcigpO1xyXG4gICAgfVxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXHJcbiAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcclxuICAgICAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICAgICAgcGFzc3dvcmQgPSA8VGV4dEZpZWxkPnBhZ2UuZ2V0Vmlld0J5SWQoXCJwYXNzd29yZFwiKTtcclxuICAgICAgICBlbWFpbCA9IDxUZXh0RmllbGQ+cGFnZS5nZXRWaWV3QnlJZChcImVtYWlsXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xyXG4gICAgfVxyXG4gICAgcm91dGVLZXljaGFpbkNhcmQoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQudGV4dCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwudGV4dCk7XHJcblxyXG4gICAgICAgIC8vIHRvIHN0b3JlIGEgSlNPTiBvYmplY3RcclxuICAgICAgICAvLyBmaXJlYmFzZS5zZXRWYWx1ZShcclxuICAgICAgICAvLyAgICAgJy9jb21wYW5pZXMnLFxyXG4gICAgICAgIC8vICAgICB7Zm9vOidiYXInfVxyXG4gICAgICAgIC8vICk7XHJcblxyXG4gICAgICAgIC8vIHRvIHN0b3JlIGFuIGFycmF5IG9mIEpTT04gb2JqZWN0c1xyXG4gICAgICAgIGZpcmViYXNlLnNldFZhbHVlKFxyXG4gICAgICAgICAgICAnL3VzZXJzJyxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICB7bmFtZTogZW1haWwudGV4dCwgY291bnRyeTogcGFzc3dvcmQudGV4dH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZmlyZWJhc2UubG9naW4oXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuUEFTU1dPUkQsXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogZW1haWwudGV4dCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZC50ZXh0XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge3RoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJkc1wiXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhSZXN1bHQ9SlNPTi5zdHJpbmdpZnkocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yK1wiIGxvbFwiKSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9jYXJkc1wiXSlcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gcmVzdWx0ID0+IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkrXCIgYWxpIGdcIlxyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlU2lnbnVwKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9zaWdudXBcIl0pO1xyXG4gICAgfVxyXG59Il19