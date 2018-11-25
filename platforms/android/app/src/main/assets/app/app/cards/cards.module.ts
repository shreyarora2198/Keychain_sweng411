import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CardsRoutingModule } from "./cards-routing.module";
import { CardsComponent } from "./cards.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CardsRoutingModule
    ],
    declarations: [
        CardsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CardsModule { }
