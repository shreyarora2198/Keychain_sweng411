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
    items = [];
    result = null;
    index = 0;
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
            //function to get length of keychains
            this.result = result;
            // console.log(this.result);
            var length = this.getLength();
            console.log("i am here");
            this.checkKeychains(length);
            
            // while(this.index!=length){
            // }
            
            
        })
        .catch(error => console.log("Error: " + error));
        // setTimeout(()=>{
            
        // }, 1000);

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
        this.keychaincardclass.setBarcodeId(this.barcodes[args.index][0]);
        this.keychaincardclass.setBarcodeFormat(this.barcodes[args.index][1]);
        this.keychaincardclass.setCardLocation(this.barcodes[args.index][2]);
        this.keychaincardclass.setCardName(this.barcodes[args.index][3]);

        this.router.navigate(["/view-card"]);
    }

    getLength(){
        var length = 0;
        for(var item in this.result.value){
            this.items.push(item);
            length++;
        }
        console.log("length is "+length);
        return length;
    }

    getKeychains(length){
        // for(var item in this.result.value){
            firebase.getValue('/users/'+this.user.getUserId()+'/Keychains/'+this.items.pop())
            .then(result=>{
                console.log("get keychains");
                this.individualBarcode = [] ;
                this.individualBarcode.push(result.value.Data);
                this.individualBarcode.push(result.value.Format);
                this.individualBarcode.push(result.value.cardLocation);
                this.individualBarcode.push(result.value.cardName);
                this.barcodes.unshift(this.individualBarcode);
                this.index ++;
                this.checkKeychains(length);
            })
        // }
    }

    checkKeychains(length){
        if(this.index< length){
            console.log("checkKeychains");
            this.getKeychains(length);
        }else{
            console.log("after promise");
            for(var i = 0;i < this.barcodes.length;i++){
                this.cardsForList.push(new KeychainCard(this.barcodes[i][0], this.barcodes[i][1], this.barcodes[i][2], this.barcodes[i][3]));
            }
            this.cardsForList.pop();
        }
    }

}