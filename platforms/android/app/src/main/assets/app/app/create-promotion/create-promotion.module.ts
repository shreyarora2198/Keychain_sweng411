import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CreatePromotionRoutingModule } from "./create-promotion-routing.module";
import { CreatePromotionComponent } from "./create-promotion.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreatePromotionRoutingModule
    ],
    declarations: [
        CreatePromotionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreatePromotionModule { }
