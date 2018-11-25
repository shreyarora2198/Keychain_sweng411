import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ViewCardRoutingModule } from "./view-card-routing.module";
import { ViewCardComponent } from "./view-card.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ViewCardRoutingModule
    ],
    declarations: [
        ViewCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewCardModule { }
