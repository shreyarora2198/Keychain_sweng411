"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var user_1 = require("../user");
var dialogs = require("tns-core-modules/ui/dialogs");
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
                else {
                    _this.user.setCompany(true);
                }
            })
                .catch(function (error) { return console.log("Error: " + error); });
            _this.router.navigate(["/cards"]);
        })
            .catch((function (error) {
            console.log(error),
                dialogs.alert({
                    title: "Incorrect Username or Password",
                    message: "If you do not have an account, you can create one by clicking \"Sign Up \" below.",
                    okButtonText: "OK"
                }).then(function () {
                    console.log("Dialog closed!");
                });
        }));
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
}()); //
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF5QztBQUN6QyxnQ0FBK0I7QUFJL0IscURBQXVEO0FBQ3ZELElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO0FBQ3pELElBQU0sY0FBYyxHQUFHLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO0FBUW5FO0lBSUksd0JBQW9CLE1BQWMsRUFDZCxJQUFVO1FBRFYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLFNBQUksR0FBSixJQUFJLENBQU07UUFKOUIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBQ3RCLFFBQUcsR0FBVyxFQUFFLENBQUM7UUFHYixxREFBcUQ7SUFDekQsQ0FBQztJQUNELGlDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUNELG1DQUFVLEdBQVYsVUFBVyxJQUFlO0lBRTFCLENBQUM7SUFDRCwwQ0FBaUIsR0FBakI7UUFBQSxpQkFxQ0M7UUFuQ0csUUFBUSxDQUFDLEtBQUssQ0FDVjtZQUNFLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCO1NBQ0YsQ0FBQzthQUNELElBQUksQ0FBQyxVQUFBLE1BQU07WUFDSSxLQUFJLENBQUMsR0FBRyxHQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ25DLEtBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsR0FBQyxLQUFJLENBQUMsR0FBRyxDQUFDO2lCQUN4QyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3BCLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLENBQUEsQ0FBQztvQkFDdEIsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsSUFBSSxDQUFDLENBQUM7b0JBQ0YsS0FBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQy9CLENBQUM7WUFDTCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEVBQTlCLENBQThCLENBQUMsQ0FBQztZQUNoRCxLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDO2FBQ2IsS0FBSyxDQUFDLENBQUMsVUFBQSxLQUFLO1lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ1YsS0FBSyxFQUFFLGdDQUFnQztvQkFDdkMsT0FBTyxFQUFFLG1GQUFtRjtvQkFDNUYsWUFBWSxFQUFFLElBQUk7aUJBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNsQyxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FDQSxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBdkRRLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztZQUNwQyxXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBSzhCLGVBQU07WUFDUixXQUFJO09BTHJCLGNBQWMsQ0F3RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXhERCxJQXdEQyxDQUFBLEVBQUU7QUF4RFUsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXJcIjtcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZVwiO1xuaW1wb3J0IHsgQXJndW1lbnRPdXRPZlJhbmdlRXJyb3IgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgd2FpdEZvck1hcCB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXIvc3JjL3V0aWxzL2NvbGxlY3Rpb25cIjtcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuY29uc3QgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmNvbnN0IGZpcmViYXNlV2ViQXBpID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2UvYXBwXCIpO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2xvZ2luLmNvbXBvbmVudC5jc3NcIl0sXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9sb2dpbi5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbWFpbCA6IHN0cmluZyA9IFwiXCI7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gICAgdWlkOiBzdHJpbmcgPSBcIlwiO1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSB1c2VyOiBVc2VyKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG4gICAgcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpOiB2b2lkIHtcbiAgICAgICAgXG4gICAgfVxuICAgIHJvdXRlS2V5Y2hhaW5DYXJkKCk6IHZvaWQge1xuICAgICAgICBcbiAgICAgICAgZmlyZWJhc2UubG9naW4oXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcbiAgICAgICAgICAgICAgcGFzc3dvcmRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHRoaXMuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51aWQ9SlNPTi5zdHJpbmdpZnkocmVzdWx0LnVpZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuc2V0VXNlcklkKHRoaXMudWlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaXJlYmFzZS5nZXRWYWx1ZSgnL2NvbXBhbmllcy8nK3RoaXMudWlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlc3VsdC52YWx1ZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuc2V0Q29tcGFueShmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXIuc2V0Q29tcGFueSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiICsgZXJyb3IpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvY2FyZHNcIl0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpLFxuICAgICAgICAgICAgICAgIGRpYWxvZ3MuYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogXCJJbmNvcnJlY3QgVXNlcm5hbWUgb3IgUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJJZiB5b3UgZG8gbm90IGhhdmUgYW4gYWNjb3VudCwgeW91IGNhbiBjcmVhdGUgb25lIGJ5IGNsaWNraW5nIFxcXCJTaWduIFVwIFxcXCIgYmVsb3cuXCIsXG4gICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRGlhbG9nIGNsb3NlZCFcIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpO1xuICAgIH1cblxuICAgIHJvdXRlU2lnbnVwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvc2lnbnVwXCJdKTtcbiAgICB9XG59Ly8iXX0=