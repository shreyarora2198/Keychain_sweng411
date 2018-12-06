import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { BarcodeScanner } from "nativescript-barcodescanner";
import * as dialogs from "tns-core-modules/ui/dialogs";
import { User } from "../user";
import { Router } from "@angular/router";

const firebase = require("nativescript-plugin-firebase");

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

    constructor(private barcodescanner: BarcodeScanner,
                private user: User,
                private router: Router) {
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
            this.barcodeFormat = result.format;
            this.barcodeData = result.text;
        }, (errorMessage) => {
            alert("Error: " + errorMessage);
        });
    }

    createCard() {        
        firebase.push(
            '/users/'+this.user.getUserId()+'/Keychains',
            {
                Format: this.barcodeFormat,
                Data: this.barcodeData,
                cardName: this.cardName,
                cardLocation: this.cardLocation
            }
        );
        dialogs.alert({
            title: "Successful",
            message: "Keychain card created!",
            okButtonText: "OK"
        }).then(() => {
            this.router.navigate(["/cards"]);

        })
    }
}
