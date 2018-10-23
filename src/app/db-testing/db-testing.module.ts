import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DbTestingRoutingModule } from "./db-testing-routing.module";
import { DbTestingComponent } from "./db-testing.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DbTestingRoutingModule
    ],
    declarations: [
        DbTestingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DbTestingModule { }
