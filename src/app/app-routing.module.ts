import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule"},
    { path: "signup", loadChildren: "~/app/signup/signup.module#SignupModule"},
    { path: "cards", loadChildren: "~/app/cards/cards.module#CardsModule"},
    { path: "promotions", loadChildren: "~/app/promotions/promotions.module#PromotionsModule"},
    { path: "create-card", loadChildren: "~/app/create-card/create-card.module#CreateCardModule"},
    { path: "create-promotion", loadChildren: "~/app/create-promotion/create-promotion.module#CreatePromotionModule"},
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule"},
    { path: "dbtesting", loadChildren: "~/app/db-testing/db-testing.module#DbTestingModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
