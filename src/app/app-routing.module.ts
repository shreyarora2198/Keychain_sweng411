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
    { path: "logout", loadChildren: "~/app/logout/logout.module#LogoutModule" },
    { path: "view-card", loadChildren: "~/app/view-card/view-card.module#ViewCardModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }