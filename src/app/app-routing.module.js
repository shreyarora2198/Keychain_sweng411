"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0NBQXNDLEVBQUM7SUFDdEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx5Q0FBeUMsRUFBQztJQUMxRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFDO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUscURBQXFELEVBQUM7SUFDMUYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSx1REFBdUQsRUFBQztJQUM3RixFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsc0VBQXNFLEVBQUM7SUFDakgsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtDQUN0RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCJ9LFxyXG4gICAgeyBwYXRoOiBcInNpZ251cFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2lnbnVwL3NpZ251cC5tb2R1bGUjU2lnbnVwTW9kdWxlXCJ9LFxyXG4gICAgeyBwYXRoOiBcImNhcmRzXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jYXJkcy9jYXJkcy5tb2R1bGUjQ2FyZHNNb2R1bGVcIn0sXHJcbiAgICB7IHBhdGg6IFwicHJvbW90aW9uc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcHJvbW90aW9ucy9wcm9tb3Rpb25zLm1vZHVsZSNQcm9tb3Rpb25zTW9kdWxlXCJ9LFxyXG4gICAgeyBwYXRoOiBcImNyZWF0ZS1jYXJkXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jcmVhdGUtY2FyZC9jcmVhdGUtY2FyZC5tb2R1bGUjQ3JlYXRlQ2FyZE1vZHVsZVwifSxcclxuICAgIHsgcGF0aDogXCJjcmVhdGUtcHJvbW90aW9uXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jcmVhdGUtcHJvbW90aW9uL2NyZWF0ZS1wcm9tb3Rpb24ubW9kdWxlI0NyZWF0ZVByb21vdGlvbk1vZHVsZVwifSxcclxuICAgIHsgcGF0aDogXCJzZXR0aW5nc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2V0dGluZ3Mvc2V0dGluZ3MubW9kdWxlI1NldHRpbmdzTW9kdWxlXCIgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcclxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=