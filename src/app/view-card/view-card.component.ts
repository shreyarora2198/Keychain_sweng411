import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Image } from "tns-core-modules/ui/image";
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

    barcodeImage: any;
    zx: any;
    newImg: any;

    constructor(private keychaincardclass: KeychainCardClass) {
        // Use the component constructor to inject providers.
        this.barcodeId = this.keychaincardclass.getBarcodeId();
        this.barcodeFormat = this.keychaincardclass.getBarcodeFormat();
        this.cardLoc = this.keychaincardclass.getCardLocation();
        this.cardName = this.keychaincardclass.getCardName();
    }

    ngOnInit(): void {
        switch(this.barcodeFormat) {
            case "QR_CODE":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.QR_CODE//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "UPC_A":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.UPC_A//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "UPC_E":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.UPC_E//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "AZTEC":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.AZTEC//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "CODABAR":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.CODABAR//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "CODE_39":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.CODE_39//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "CODE_93":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.CODE_93//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "CODE_128":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.CODE_128//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "DATA_MATRIX":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.DATA_MATRIX//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "EAN_8":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.EAN_8//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "EAN_13":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.EAN_13//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "ITF":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.ITF//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "MAXICODE":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.MAXICODE//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
            case "PDF_417":
                this.barcodeImage = <Image>this.barcodeImg.nativeElement;
                this.zx = new ZXing();
                this.newImg = this.zx.createBarcode({
                    encode: this.barcodeId,//data
                    format: ZXing.PDF_417//format
                });
                this.barcodeImage.imageSource = ImageSource.fromNativeSource(this.newImg);
                break;
        }
    }  

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}