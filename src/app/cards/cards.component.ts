import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";
import { Image } from "tns-core-modules/ui/image";
import { TextField } from "ui/text-field";
import { User } from "../user";
import { createInjector } from "@angular/core/src/view/refs";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

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
    barcodeData: string = "";
    barcodeFormat: string = "";
    barcodes: [string[]]= [[]]; 
    individualBarcode: string[] = [];
    constructor(private router: Router, private user: User) {
        // Use the component constructor to inject providers.
    }
    // async firebase(){
        
            // return Promise.resolve(1);
            // console.log("blah"+barcodes.length);
            // for(var i = 0;i< barcodes.length;i++){
            //     for(var j =0;j<barcodes[i].length;j++){
            //         console.log("Keychain "+i+": "+barcodes[i][j]);
            //     }
            // }
        
        // const barcodeImage = <Image>this.barcodeImg.nativeElement;
        // const zx = new ZXing();
        // const newImg = zx.createBarcode({
        //     encode: this.barcodeData,//data
        //     format: this.barcodeFormat//format
        // });
        // barcodeImage.imageSource = ImageSource.fromNativeSource(newImg);
    // }
    ngOnInit() {
        //     this.firebase().then(()=>{
        //         console.log("here");
        // });
        // this.firebase();
        // for(var i = 0;i< this.barcodes.length;i++){
        //     for(var j =0;j<this.barcodes[i].length;j++){
        //         console.log("Keychain "+i+": "+this.barcodes[i][j]);
        //     }
        // }
        firebase.getValue('/users/'+this.user.getUserId()+'/Keychains')
        .then(result => {
            for(var item in result.value){
                // console.log("result"+JSON.stringify(item));
                firebase.getValue('/users/'+this.user.getUserId()+'/Keychains/'+item)
                .then(result=>{
                    console.log(JSON.stringify(result.value.Data) +" is the data result");
                    console.log(JSON.stringify(result.value.Format) +" is the format result");
                    console.log(JSON.stringify(result.value.cardLocation) +" is the location result");
                    console.log(JSON.stringify(result.value.cardName) +" is the name result");
                    this.individualBarcode = [] ;
                    this.individualBarcode.push(JSON.stringify(result.value.Data));
                    this.individualBarcode.push(JSON.stringify(result.value.Format));
                    this.individualBarcode.push(JSON.stringify(result.value.cardLocation));
                    this.individualBarcode.push(JSON.stringify(result.value.cardName));
                    this.barcodes.push(this.individualBarcode);
                    console.log(result.value.length);
                })
                console.log("hello2");
            }
        })
        .catch(error => console.log("Error: " + error));
        setTimeout(()=>{
            for(var i = 0;i< this.barcodes.length;i++){
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
    // snapshotToArray(snapshot){
    //     var returnArr =[];
    //     snapshot.forEach(function(childSnapshot){
    //         var item = childSnapshot.val();
    //         item.key = childSnapshot.key;

    //         returnArr.push(item);
    //     });
    //     return returnArr;
    // }
    navigateViewCard() {
        this.router.navigate(["/view-card"]);
    }
    viewBarcodeInfo(){
        
    }

}