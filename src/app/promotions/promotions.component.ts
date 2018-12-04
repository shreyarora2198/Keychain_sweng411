import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { initFirebaseMessaging } from 'nativescript-plugin-firebase/messaging/messaging';
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import {User} from "../user";
import { Router } from "@angular/router";
@Component({
    selector: "Promotions",
    moduleId: module.id,
    styleUrls: ["./promotions.component.css"],
    templateUrl: "./promotions.component.html"
})
export class PromotionsComponent implements OnInit {
    promotions: [string[]] = [[]];
    individualPromotion: string[] = [];
    constructor(private router: Router, private user: User) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        firebase.getValue('/promotions/'+this.user.getCompanyName())
        .then((result)=>{
            for(var item in result.value){
                firebase.getValue('/promotions/'+this.user.getCompanyName()+'/'+item)
                .then(result=>{
                    console.log(result);
                // console.log("company name: "+this.user.getCompanyName());
                this.individualPromotion =[];
                this.individualPromotion.push(JSON.stringify(result.value.promoName));
                this.individualPromotion.push(JSON.stringify(result.value.promoDesc));
                // console.log(JSON.stringify(result));
                // console.log(JSON.stringify(result));
                this.promotions.push(this.individualPromotion);
                }
                )
            }
        }
        )
                
        .catch(error=>console.log("Error"+error))
        setTimeout(()=>{
            for(var i = 0;i< this.promotions.length;i++){
                for(var j =0;j<this.promotions[i].length;j++){
                    console.log();
                    console.log("Keychain "+i+": "+this.promotions[i][j]);
                }
            }
        }, 500);
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
