import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from "nativescript-barcodescanner";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: "CreateCard",
    moduleId: module.id,
    styleUrls: ["./create-card.component.css"],
    templateUrl: "./create-card.component.html"
})
export class CreateCardComponent implements OnInit {

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
            formats: "QR_CODE, EAN_13",
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
            // dialogs.alert({
            //     title: "You Scanned ",
            //     message: "Format: " + result.format + ",\nConent: " + result.text,
            //     okButtonText: "OK"
            // });
        }, (errorMessage) => {
            console.log("Error when scanning " + errorMessage);
        });
    }

    createCard() {
        console.log("CREATING CARD...\nFormat: " + this.barcodeFormat + "\nData: " + this.barcodeData
            + "\nName: " + this.cardName + "\nLocation: " + this.cardLocation)
    }
}
