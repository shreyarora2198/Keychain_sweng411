import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { initFirebaseMessaging } from 'nativescript-plugin-firebase/messaging/messaging';
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import {User} from "../user";
import { PromotionClass } from "../promotion";
import { Router } from "@angular/router";

class Promotion{
    constructor(public companyName: string) { }
}

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

    public promotionsForList: Array<Promotion>;

    constructor(private router: Router,
                private user: User,
                private promotionclass: PromotionClass) {
        this.promotionsForList = [];
    }

    ngOnInit(): void {
        // Init your component properties here.
        firebase.getValue('/promotions/')
        .then((result)=>{
            for(var item in result.value){
                while(this.companyPromotions.length > 0) {
                    this.companyPromotions.pop();
                }
                // console.log("company name: "+item);
                this.getPromotions(item);
                this.promotions.unshift(this.companyPromotions);
            }
        }
        )
        .catch(error=>console.log("Error"+error))
        setTimeout(()=>{
            for(var i = 0;i < this.promotions.length;i++){
                //console.log(this.promotions[0][0][0]);
                this.promotionsForList.push(new Promotion(this.promotions[i][0][0]));
            }
        }, 1000);
    }

    getPromotions(item){
        
        firebase.getValue('/promotions/'+item)
                .then(resultPromo=>{
                    for(var promo in resultPromo.value){
                        while(this.individualPromotion.length > 0) {
                            this.individualPromotion.pop();
                        }
                        firebase.getValue('/promotions/'+item+'/'+promo)
                        .then(finalResult => {
                            console.log("company Name"+item);
                            console.log("promoName"+ finalResult.value.promoName);
                            console.log("promoDesc"+ finalResult.value.promoDesc);
                            this.individualPromotion.push(item);
                            this.individualPromotion.push(finalResult.value.promoName);
                            this.individualPromotion.push(finalResult.value.promoDesc);
                            this.companyPromotions.push(this.individualPromotion);
                            for(let i=1; i<this.companyPromotions.length; i++) {
                                for(let j=1; j<4; j++) {
                                    console.log("test1: " + this.companyPromotions[i][j]);
                                    console.log("test2: " + this.companyPromotions.length);
                                }
                            }
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

    public onItemTap(args) {
        console.log("Item Tapped at cell index: " + args.index);
        this.promotionclass.setCompanyName(this.promotions[args.index][0][0]);
        this.promotionclass.setCompanyPromotions(this.promotions[args.index]);

        //this.router.navigate(["/view-card"]);
    }
}
