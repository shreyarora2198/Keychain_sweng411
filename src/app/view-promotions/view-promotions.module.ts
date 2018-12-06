import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ViewPromotionsRoutingModule } from "./view-promotions-routing.module";
import { ViewPromotionsComponent } from "./view-promotions.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ViewPromotionsRoutingModule
    ],
    declarations: [
        ViewPromotionsComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ViewPromotionsModule { }
