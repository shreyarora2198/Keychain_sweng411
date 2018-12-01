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

    barcodeFormat: string = "";
    barcodeData: string = "";
    cardName: string = "";
    cardLocation: string = "";

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

    public onScan() {
        this.barcodescanner.scan({
            showFlipCameraButton: true,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            resultDisplayDuration: 500
        }).then((result) => {
            console.log("Format: " + result.format + ",\nConent: " + result.text);
            this.barcodeFormat = result.format;
            this.barcodeData = result.text;
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        });
    }

    createPromotion() {
        console.log("CREATING PROMOTION...\nFormat: " + this.barcodeFormat + "\nData: " + this.barcodeData
            + "\nName: " + this.cardName + "\nLocation: " + this.cardLocation)
    }
}
