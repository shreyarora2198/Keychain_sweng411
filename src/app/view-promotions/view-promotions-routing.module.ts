import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ViewPromotionsComponent } from "./view-promotions.component";

const routes: Routes = [
    { path: "", component: ViewPromotionsComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ViewPromotionsRoutingModule { }
