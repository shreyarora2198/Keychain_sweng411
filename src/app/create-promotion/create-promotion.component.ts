import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from "nativescript-barcodescanner";
import { User } from "../user";
import { Router } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

@Component({
    selector: "CreatePromotion",
    moduleId: module.id,
    styleUrls: ["./create-promotion.component.css"],
    templateUrl: "./create-promotion.component.html"
})
export class CreatePromotionComponent implements OnInit {

    promoName: string = "";
    promoDesc: string = ""

    constructor(private user: User,
                private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    createPromotion() {
        console.log("\nCREATING PROMOTION...\nName: " 
        + this.promoName + "\nDescription: " + this.promoDesc);
        firebase.push(
            'promotions/'+this.user.getCompanyName(),
            {
                promoName: this.promoName,
                promoDesc: this.promoDesc
            }
        );
        dialogs.alert({
            title: "Successful",
            message: "Promotion published!",
            okButtonText: "OK"
        }).then(() => {
            console.log("Dialog closed!");
        })
        this.router.navigate(["/promotions"]);
    }
}
