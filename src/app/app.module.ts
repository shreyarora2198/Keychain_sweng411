import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptFormsModule } from "nativescript-angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { User } from "./user";
import { KeychainCardClass } from "./keychain-card";
import { Company } from "./company";

import firebase = require('nativescript-plugin-firebase');
import { BarcodeScanner } from "nativescript-barcodescanner";

firebase.init().then(()=>{
    console.log('Firebase initialized');
})
.catch(error=>console.error('Error:+${error}'))



@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptFormsModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        BarcodeScanner,
        User,
        KeychainCardClass,
        Company
    ]
})
export class AppModule { }
