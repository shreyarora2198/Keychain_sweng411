import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { CreatePromotionRoutingModule } from "./create-promotion-routing.module";
import { CreatePromotionComponent } from "./create-promotion.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CreatePromotionRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        CreatePromotionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CreatePromotionModule { }
