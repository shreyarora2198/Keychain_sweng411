import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Image } from "tns-core-modules/ui/image";
import { TextField } from "ui/text-field";

const ZXing = require("nativescript-zxing");
const ImageSource = require("image-source");

@Component({
    selector: "Cards",
    moduleId: module.id,
    styleUrls: ["./cards.component.css"],
    templateUrl: "./cards.component.html"
})

export class CardsComponent implements OnInit {

    @ViewChild("barcodeImg") barcodeImg: ElementRef;
    barcodeText="036000291452";

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    generateBarcode() {
        const barcodeImage = <Image>this.barcodeImg.nativeElement;
        const zx = new ZXing();
        const newImg = zx.createBarcode({
            encode: this.barcodeText,
            format: ZXing.UPC_A
        });
        barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    }
}