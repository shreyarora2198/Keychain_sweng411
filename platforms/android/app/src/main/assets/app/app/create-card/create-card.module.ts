import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CreateCardRoutingModule } from "./create-card-routing.module";
import { CreateCardComponent } from "./create-card.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreateCardRoutingModule
    ],
    declarations: [
        CreateCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreateCardModule { }
