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
    function LoginComponent(router, user) {
        this.router = router;
        this.user = user;
        // Use the component constructor to inject providers.
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    LoginComponent.prototype.pageLoaded = function (args) {
        page = args.object;
        password = page.getViewById("password");
        email = page.getViewById("email");
        console.log(page);
        this.user.setUserId("123456789"); //testing
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
        __metadata("design:paramtypes", [router_1.Router,
            user_1.User])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFNL0IsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLFFBQVEsQ0FBQztBQUNiLElBQUksS0FBSyxDQUFDO0FBQ1YsSUFBSSxVQUFVLENBQUM7QUFDZiw4QkFBOEI7QUFDOUIsb0NBQW9DO0FBQ3BDLDhEQUE4RDtBQUM5RCxvREFBb0Q7QUFDcEQsZ0RBQWdEO0FBQ2hELGdDQUFnQztBQUNoQyxVQUFVO0FBQ1YsSUFBSTtBQUNKLHdCQUF3QjtBQU94QjtJQUVJLHdCQUFvQixNQUFjLEVBQ2QsSUFBVTtRQURWLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLHFEQUFxRDtJQUN6RCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBQ0QsbUNBQVUsR0FBVixVQUFXLElBQWU7UUFDdEIsSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDekIsUUFBUSxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbkQsS0FBSyxHQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7SUFDL0MsQ0FBQztJQUNELDBDQUFpQixHQUFqQjtRQUFBLGlCQWlDQztRQWhDRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4Qix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsS0FBSztRQUVMLG9DQUFvQztRQUNwQyxRQUFRLENBQUMsUUFBUSxDQUNiLFFBQVEsRUFDUjtZQUNBLEVBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7U0FDekMsQ0FDSixDQUFDO1FBQ0YsUUFBUSxDQUFDLEtBQUssQ0FDVjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSTtnQkFDakIsUUFBUSxFQUFFLFFBQVEsQ0FBQyxJQUFJO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE1BQU07WUFBSyxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7WUFDakMsVUFBVSxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDckMsQ0FBQyxDQUNSO2FBQ0osS0FBSyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUMsTUFBTSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQztRQUM3QyxtQ0FBbUM7UUFFbkMsNENBQTRDO0lBQ3BELENBQUM7SUFFRCxvQ0FBVyxHQUFYO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFyRFEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1lBQ3BDLFdBQVcsRUFBRSx3QkFBd0I7U0FDeEMsQ0FBQzt5Q0FHOEIsZUFBTTtZQUNSLFdBQUk7T0FIckIsY0FBYyxDQXNEMUI7SUFBRCxxQkFBQztDQUFBLEFBdERELElBc0RDO0FBdERZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuLi91c2VyXCI7aW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZS9wYWdlXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7VGV4dEZpZWxkfSBmcm9tIFwidWkvdGV4dC1maWVsZFwiO1xuaW1wb3J0IHtCdXR0b259IGZyb20gXCJ1aS9idXR0b25cIjtcbmltcG9ydCB7IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yIH0gZnJvbSBcInJ4anNcIjtcbmltcG9ydCB7IHdhaXRGb3JNYXAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyL3NyYy91dGlscy9jb2xsZWN0aW9uXCI7XG5jb25zdCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XG5sZXQgcGFnZTtcbmxldCBwYXNzd29yZDtcbmxldCBlbWFpbDtcbmxldCBhdXRoUmVzdWx0O1xuLy8gbGV0IHBhZ2VMb2FkZWQgPSAoYXJncykgPT57XG4vLyAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbi8vICAgICBsZXQgcGFzc3dvcmQgPSA8VGV4dEZpZWxkPnBhZ2UuZ2V0Vmlld0J5SWQoXCJwYXNzd29yZFwiKTtcbi8vICAgICBsZXQgbG9naW4gPTxCdXR0b24+cGFnZS5nZXRWaWV3QnlJZChcImxvZ2luXCIpO1xuLy8gICAgIGxvZ2luLm9uKCd0YXAnLGZ1bmN0aW9uKGFyZ3M6IEV2ZW50RGF0YSl7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKVxuLy8gICAgIH0pO1xuLy8gfVxuLy8gZXhwb3J0IHsgcGFnZUxvYWRlZCB9XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG4gICAgcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgICAgICBwYXNzd29yZCA9IDxUZXh0RmllbGQ+cGFnZS5nZXRWaWV3QnlJZChcInBhc3N3b3JkXCIpO1xuICAgICAgICBlbWFpbCA9IDxUZXh0RmllbGQ+cGFnZS5nZXRWaWV3QnlJZChcImVtYWlsXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICAgICAgdGhpcy51c2VyLnNldFVzZXJJZChcIjEyMzQ1Njc4OVwiKTsgLy90ZXN0aW5nXG4gICAgfVxuICAgIHJvdXRlS2V5Y2hhaW5DYXJkKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZC50ZXh0KTtcbiAgICAgICAgY29uc29sZS5sb2coZW1haWwudGV4dCk7XG5cbiAgICAgICAgLy8gdG8gc3RvcmUgYSBKU09OIG9iamVjdFxuICAgICAgICAvLyBmaXJlYmFzZS5zZXRWYWx1ZShcbiAgICAgICAgLy8gICAgICcvY29tcGFuaWVzJyxcbiAgICAgICAgLy8gICAgIHtmb286J2Jhcid9XG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gdG8gc3RvcmUgYW4gYXJyYXkgb2YgSlNPTiBvYmplY3RzXG4gICAgICAgIGZpcmViYXNlLnNldFZhbHVlKFxuICAgICAgICAgICAgJy91c2VycycsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICB7bmFtZTogZW1haWwudGV4dCwgY291bnRyeTogcGFzc3dvcmQudGV4dH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgKTtcbiAgICAgICAgZmlyZWJhc2UubG9naW4oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsLnRleHQsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLnRleHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7dGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2NhcmRzXCJdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhSZXN1bHQ9SlNPTi5zdHJpbmdpZnkocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yK1wiIGxvbFwiKSk7XG4gICAgICAgICAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2FyZHNcIl0pXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzdWx0ID0+IEpTT04uc3RyaW5naWZ5KHJlc3VsdCkrXCIgYWxpIGdcIlxuICAgIH1cblxuICAgIHJvdXRlU2lnbnVwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcbiAgICB9XG59Il19