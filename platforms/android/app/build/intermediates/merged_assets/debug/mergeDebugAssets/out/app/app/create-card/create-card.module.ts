import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CreateCardRoutingModule } from "./create-card-routing.module";
import { CreateCardComponent } from "./create-card.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreateCardRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CreateCardComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreateCardModule { }
