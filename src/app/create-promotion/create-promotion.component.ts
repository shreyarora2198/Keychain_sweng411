import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from "nativescript-barcodescanner";

@Component({
    selector: "CreatePromotion",
    moduleId: module.id,
    styleUrls: ["./create-promotion.component.css"],
    templateUrl: "./create-promotion.component.html"
})
export class CreatePromotionComponent implements OnInit {

    promoName: string = "";
    promoDesc: string = ""

    constructor(private barcodescanner: BarcodeScanner) {
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
        console.log("\nCREATING PROMOTION...\nName: " + this.promoName + "\nDescription: " + this.promoDesc)
    }
}
