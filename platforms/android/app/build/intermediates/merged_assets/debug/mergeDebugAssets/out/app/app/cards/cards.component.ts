import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

@Component({
    selector: "Cards",
    moduleId: module.id,
    styleUrls: ["./cards.component.css"],
    templateUrl: "./cards.component.html"
})
export class CardsComponent implements OnInit {

    ZXing = require('nativescript-zxing');
    zx = new this.ZXing();

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        let barcodeID = "5901234123457";
        let barcodeFormat = "UPC_A"
        var img = this.zx.createBarcode({encode: barcodeID, height: 100, width: 100, format: this.ZXing.UPC_A})
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    createBarcode(/*barcodeID: String, barcodeFormat: String*/) {
        // let barcodeID = "5901234123457";
        // let barcodeFormat = "UPC_A"
        // var img = this.zx.createBarcode({encode: barcodeID, height: 100, width: 100, format: barcodeFormat})
    }
}
