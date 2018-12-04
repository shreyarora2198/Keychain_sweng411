import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { Image } from "tns-core-modules/ui/image";
import { TextField } from "ui/text-field";
import { User } from "../user";
import { createInjector } from "@angular/core/src/view/refs";
import { KeychainCardClass } from "../keychain-card";

const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
const ZXing = require("nativescript-zxing");
const ImageSource = require("image-source");

class KeychainCard {
    constructor(public barcodeId: string,
                public barcodeFormat: string,
                public cardLoc: string,
                public cardName: string) { }
}

@Component({
    selector: "Cards",
    moduleId: module.id,
    styleUrls: ["./cards.component.css"],
    templateUrl: "./cards.component.html"
})

export class CardsComponent implements OnInit {

    public cardsForList: Array<KeychainCard>;

    @ViewChild("barcodeImg") barcodeImg: ElementRef;
    barcodeData: string = "";
    barcodeFormat: string = "";
    barcodes: [string[]]= [[]]; 
    individualBarcode: string[] = [];
    constructor(private router: Router,
                private user: User,
                private keychaincardclass: KeychainCardClass) {
        this.cardsForList = [];
    }
    
    ngOnInit() {
        firebase.getValue('/users/'+this.user.getUserId()+'/Keychains')
        .then(result => {
            for(var item in result.value){
                firebase.getValue('/users/'+this.user.getUserId()+'/Keychains/'+item)
                .then(result=>{
                    console.log(JSON.stringify(result.value.Data) +" is the data result");
                    console.log(JSON.stringify(result.value.Format) +" is the format result");
                    console.log(JSON.stringify(result.value.cardLocation) +" is the location result");
                    console.log(JSON.stringify(result.value.cardName) +" is the name result");
                    this.individualBarcode = [] ;
                    this.individualBarcode.push(result.value.Data);
                    this.individualBarcode.push(result.value.Format);
                    this.individualBarcode.push(result.value.cardLocation);
                    this.individualBarcode.push(result.value.cardName);
                    this.barcodes.unshift(this.individualBarcode);
                })
            }
        })
        .catch(error => console.log("Error: " + error));
        
        setTimeout(()=>{
            for(var i = 0;i < this.barcodes.length;i++){
                this.cardsForList.push(new KeychainCard(this.barcodes[i][0], this.barcodes[i][1], this.barcodes[i][2], this.barcodes[i][3]));
                for(var j =0;j<this.barcodes[i].length;j++){
                    console.log();
                    console.log("Keychain "+i+": "+this.barcodes[i][j]);
                }
            }
        }, 500);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    navigateViewCard() {
        this.router.navigate(["/view-card"]);
    }

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
        this.keychaincardclass.setBarcodeFormat(this.barcodes[args.index][0]);
        this.keychaincardclass.setBarcodeId(this.barcodes[args.index][1]);
        this.keychaincardclass.setCardLocation(this.barcodes[args.index][2]);
        this.keychaincardclass.setCardName(this.barcodes[args.index][3]);

        console.log(this.keychaincardclass.getBarcodeFormat());
        console.log(this.keychaincardclass.getBarcodeId());
        console.log(this.keychaincardclass.getCardLocation());
        console.log(this.keychaincardclass.getCardName());
    }

}