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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsc0NBQXNDLEVBQUM7SUFDdEUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx5Q0FBeUMsRUFBQztJQUMxRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFDO0lBQ3RFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUscURBQXFELEVBQUM7SUFDMUYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSx1REFBdUQsRUFBQztJQUM3RixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLCtDQUErQyxFQUFFO0NBQ3RGLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImxvZ2luXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9sb2dpbi9sb2dpbi5tb2R1bGUjTG9naW5Nb2R1bGVcIn0sXG4gICAgeyBwYXRoOiBcInNpZ251cFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvc2lnbnVwL3NpZ251cC5tb2R1bGUjU2lnbnVwTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJjYXJkc1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvY2FyZHMvY2FyZHMubW9kdWxlI0NhcmRzTW9kdWxlXCJ9LFxuICAgIHsgcGF0aDogXCJwcm9tb3Rpb25zXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9wcm9tb3Rpb25zL3Byb21vdGlvbnMubW9kdWxlI1Byb21vdGlvbnNNb2R1bGVcIn0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZS1jYXJkXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9jcmVhdGUtY2FyZC9jcmVhdGUtY2FyZC5tb2R1bGUjQ3JlYXRlQ2FyZE1vZHVsZVwifSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=