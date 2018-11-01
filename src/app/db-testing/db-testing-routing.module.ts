import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DbTestingComponent } from "./db-testing.component";

const routes: Routes = [
    { path: "", component: DbTestingComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DbTestingRoutingModule { }
