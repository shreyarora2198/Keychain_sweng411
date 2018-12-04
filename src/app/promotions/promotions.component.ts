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
    companyPromotions: [string[]] = [[]];
    promotions: [[string[]]] = [[[]]];
    individualPromotion: string[] = [];
    constructor(private router: Router, private user: User) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        firebase.getValue('/promotions/')
        .then((result)=>{
            for(var item in result.value){
                this.companyPromotions= [[]];
                // console.log("company name: "+item);
                this.getPromotions(item);
                this.promotions.push(this.companyPromotions);
            }
        }
        )
        .catch(error=>console.log("Error"+error))
        setTimeout(()=>{
            
        }, 4000);
    }

    getPromotions(item){
        
        firebase.getValue('/promotions/'+item)
                .then(resultPromo=>{
                    for(var promo in resultPromo.value){
                        this.individualPromotion =[];
                        firebase.getValue('/promotions/'+item+'/'+promo)
                        .then(finalResult => {
                            console.log("company Name"+item);
                            console.log("promoName"+ finalResult.value.promoName);
                            console.log("promoDesc"+ finalResult.value.promoDesc);
                            this.individualPromotion.push(item);
                            this.individualPromotion.push(finalResult.value.promoName);
                            this.individualPromotion.push(finalResult.value.promoDesc);
                            this.companyPromotions.push(this.individualPromotion);
                        })
                    }
                }
                )
                .catch(error => console.log("error"+error))
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
