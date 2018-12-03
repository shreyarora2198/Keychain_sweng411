"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "signup", loadChildren: "~/app/signup/signup.module#SignupModule" },
    { path: "cards", loadChildren: "~/app/cards/cards.module#CardsModule" },
    { path: "promotions", loadChildren: "~/app/promotions/promotions.module#PromotionsModule" },
    { path: "create-card", loadChildren: "~/app/create-card/create-card.module#CreateCardModule" },
    { path: "create-promotion", loadChildren: "~/app/create-promotion/create-promotion.module#CreatePromotionModule" },
    { path: "logout", loadChildren: "~/app/logout/logout.module#LogoutModule" },
    { path: "view-card", loadChildren: "~/app/view-card/view-card.module#ViewCardModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFDO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUseUNBQXlDLEVBQUM7SUFDMUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBQztJQUN0RSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHFEQUFxRCxFQUFDO0lBQzFGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsdURBQXVELEVBQUM7SUFDN0YsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLHNFQUFzRSxFQUFDO0lBQ2pILEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpREFBaUQsRUFBQztDQUN4RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvbG9naW5cIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJzaWdudXBcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NpZ251cC9zaWdudXAubW9kdWxlI1NpZ251cE1vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwiY2FyZHNcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NhcmRzL2NhcmRzLm1vZHVsZSNDYXJkc01vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwicHJvbW90aW9uc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSNQcm9tb3Rpb25zTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJjcmVhdGUtY2FyZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvY3JlYXRlLWNhcmQvY3JlYXRlLWNhcmQubW9kdWxlI0NyZWF0ZUNhcmRNb2R1bGVcIn0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZS1wcm9tb3Rpb25cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NyZWF0ZS1wcm9tb3Rpb24vY3JlYXRlLXByb21vdGlvbi5tb2R1bGUjQ3JlYXRlUHJvbW90aW9uTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlI1NldHRpbmdzTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwidmlldy1jYXJkXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC92aWV3LWNhcmQvdmlldy1jYXJkLm1vZHVsZSNWaWV3Q2FyZE1vZHVsZVwifVxuXTtcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvclJvb3Qocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiJdfQ==
