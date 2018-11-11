"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_model_1 = require("../shared/user.model");
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
var page;
var password;
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
        console.log(page);
    };
    LoginComponent.prototype.routeKeychainCard = function () {
        console.log(password.text);
        this.router.navigate(["/cards"]);
        // firebase.login(
        //     {
        //       type: firebase.LoginType.PASSWORD,
        //       passwordOptions: {
        //         email: ,
        //         password: 
        //       }
        //     })
        //     .then(result => JSON.stringify(result))
        //     .catch(error => console.log(error));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxtREFBNEM7QUFNNUMsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLDhCQUE4QixDQUFDLENBQUM7QUFDekQsSUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7QUFDbkUsSUFBSSxJQUFJLENBQUM7QUFDVCxJQUFJLFFBQVEsQ0FBQztBQUNiLDhCQUE4QjtBQUM5QixvQ0FBb0M7QUFDcEMsOERBQThEO0FBQzlELG9EQUFvRDtBQUNwRCxnREFBZ0Q7QUFDaEQsZ0NBQWdDO0FBQ2hDLFVBQVU7QUFDVixJQUFJO0FBQ0osd0JBQXdCO0FBT3hCO0lBR0ksd0JBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQzlCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxpQkFBSSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFFM0MsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxJQUFlO1FBQ3RCLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3pCLFFBQVEsR0FBYyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELDBDQUFpQixHQUFqQjtRQUNJLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUVqQyxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLDJDQUEyQztRQUMzQywyQkFBMkI7UUFDM0IsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixVQUFVO1FBQ1YsU0FBUztRQUNULDhDQUE4QztRQUM5QywyQ0FBMkM7SUFDL0MsQ0FBQztJQUVELG9DQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQWpDUSxjQUFjO1FBTjFCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsT0FBTztZQUNqQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsdUJBQXVCLENBQUM7WUFDcEMsV0FBVyxFQUFFLHdCQUF3QjtTQUN4QyxDQUFDO3lDQUk4QixlQUFNO09BSHpCLGNBQWMsQ0FrQzFCO0lBQUQscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztBQWxDWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLm1vZGVsXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHtUZXh0RmllbGR9IGZyb20gXCJ1aS90ZXh0LWZpZWxkXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwidWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7IEFyZ3VtZW50T3V0T2ZSYW5nZUVycm9yIH0gZnJvbSBcInJ4anNcIjtcclxuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuY29uc3QgZmlyZWJhc2VXZWJBcGkgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZS9hcHBcIik7XHJcbmxldCBwYWdlO1xyXG5sZXQgcGFzc3dvcmQ7XHJcbi8vIGxldCBwYWdlTG9hZGVkID0gKGFyZ3MpID0+e1xyXG4vLyAgICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuLy8gICAgIGxldCBwYXNzd29yZCA9IDxUZXh0RmllbGQ+cGFnZS5nZXRWaWV3QnlJZChcInBhc3N3b3JkXCIpO1xyXG4vLyAgICAgbGV0IGxvZ2luID08QnV0dG9uPnBhZ2UuZ2V0Vmlld0J5SWQoXCJsb2dpblwiKTtcclxuLy8gICAgIGxvZ2luLm9uKCd0YXAnLGZ1bmN0aW9uKGFyZ3M6IEV2ZW50RGF0YSl7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2cocGFzc3dvcmQpXHJcbi8vICAgICB9KTtcclxuLy8gfVxyXG4vLyBleHBvcnQgeyBwYWdlTG9hZGVkIH1cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5jb21wb25lbnQuY3NzXCJdLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICB1c2VyOiBVc2VyO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIH1cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxyXG4gICAgICAgICBcclxuICAgIH1cclxuICAgIHBhZ2VMb2FkZWQoYXJnczogRXZlbnREYXRhKTogdm9pZCB7XHJcbiAgICAgICAgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgICAgIHBhc3N3b3JkID0gPFRleHRGaWVsZD5wYWdlLmdldFZpZXdCeUlkKFwicGFzc3dvcmRcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2cocGFnZSk7XHJcbiAgICB9XHJcbiAgICByb3V0ZUtleWNoYWluQ2FyZCgpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZC50ZXh0KTtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2FyZHNcIl0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGZpcmViYXNlLmxvZ2luKFxyXG4gICAgICAgIC8vICAgICB7XHJcbiAgICAgICAgLy8gICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIC8vICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgIC8vICAgICAgICAgZW1haWw6ICxcclxuICAgICAgICAvLyAgICAgICAgIHBhc3N3b3JkOiBcclxuICAgICAgICAvLyAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gICAgIC50aGVuKHJlc3VsdCA9PiBKU09OLnN0cmluZ2lmeShyZXN1bHQpKVxyXG4gICAgICAgIC8vICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICAgIH1cclxuXHJcbiAgICByb3V0ZVNpZ251cCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcclxuICAgIH1cclxufSJdfQ==