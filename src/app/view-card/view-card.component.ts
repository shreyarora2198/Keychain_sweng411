import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Image } from "tns-core-modules/ui/image";
import { TextField } from "ui/text-field";
import { KeychainCardClass } from "../keychain-card";

const ZXing = require("nativescript-zxing");
const ImageSource = require("image-source");

@Component({
    selector: "ViewCard",
    moduleId: module.id,
    styleUrls: ["./view-card.component.css"],
    templateUrl: "./view-card.component.html"
})

export class ViewCardComponent implements OnInit {

    @ViewChild("barcodeImg") barcodeImg: ElementRef;

    private barcodeId: string;
    private barcodeFormat: string;
    private cardLoc: string;
    private cardName: string;

    constructor(private keychaincardclass: KeychainCardClass) {
        // Use the component constructor to inject providers.
        this.barcodeId = this.keychaincardclass.getBarcodeId();
        this.barcodeFormat = this.keychaincardclass.getBarcodeFormat();
        this.cardLoc = this.keychaincardclass.getCardLocation();
        this.cardName = this.keychaincardclass.getCardName();
    }

    ngOnInit(): void {
        console.log(this.barcodeId);
        const barcodeImage = <Image>this.barcodeImg.nativeElement;
        const zx = new ZXing();
        const newImg = zx.createBarcode({
            encode: this.barcodeId,//data
            format: ZXing.UPC_A//format
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}