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
    { path: "view-card", loadChildren: "~/app/view-card/view-card.module#ViewCardModule" },
    { path: "view-promotions", loadChildren: "~/app/view-promotions/view-promotions.module#ViewPromotionsModule" }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRTtJQUNyRCxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFDO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUseUNBQXlDLEVBQUM7SUFDMUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBQztJQUN0RSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLHFEQUFxRCxFQUFDO0lBQzFGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsdURBQXVELEVBQUM7SUFDN0YsRUFBRSxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsWUFBWSxFQUFFLHNFQUFzRSxFQUFDO0lBQ2pILEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUseUNBQXlDLEVBQUU7SUFDM0UsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxpREFBaUQsRUFBQztJQUNyRixFQUFFLElBQUksRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUMsbUVBQW1FLEVBQUM7Q0FDL0csQ0FBQztBQU1GO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFKNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDO1NBQ3RDLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUM7QUFBcEIsNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwibG9naW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2xvZ2luL2xvZ2luLm1vZHVsZSNMb2dpbk1vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwic2lnbnVwXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zaWdudXAvc2lnbnVwLm1vZHVsZSNTaWdudXBNb2R1bGVcIn0sXG4gICAgeyBwYXRoOiBcImNhcmRzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jYXJkcy9jYXJkcy5tb2R1bGUjQ2FyZHNNb2R1bGVcIn0sXG4gICAgeyBwYXRoOiBcInByb21vdGlvbnNcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3Byb21vdGlvbnMvcHJvbW90aW9ucy5tb2R1bGUjUHJvbW90aW9uc01vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwiY3JlYXRlLWNhcmRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2NyZWF0ZS1jYXJkL2NyZWF0ZS1jYXJkLm1vZHVsZSNDcmVhdGVDYXJkTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJjcmVhdGUtcHJvbW90aW9uXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jcmVhdGUtcHJvbW90aW9uL2NyZWF0ZS1wcm9tb3Rpb24ubW9kdWxlI0NyZWF0ZVByb21vdGlvbk1vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwibG9nb3V0XCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9sb2dvdXQvbG9nb3V0Lm1vZHVsZSNMb2dvdXRNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJ2aWV3LWNhcmRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3ZpZXctY2FyZC92aWV3LWNhcmQubW9kdWxlI1ZpZXdDYXJkTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJ2aWV3LXByb21vdGlvbnNcIiwgbG9hZENoaWxkcmVuOlwifi9hcHAvdmlldy1wcm9tb3Rpb25zL3ZpZXctcHJvbW90aW9ucy5tb2R1bGUjVmlld1Byb21vdGlvbnNNb2R1bGVcIn1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9Il19