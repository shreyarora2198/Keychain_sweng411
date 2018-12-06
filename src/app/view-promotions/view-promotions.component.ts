import { Component, OnInit } from "@angular/core";
import { Company } from "../company";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "application";
const firebase = require("nativescript-plugin-firebase");

class Promotion {
    constructor(public promotionName: string,
                public promotionDesc: string) {}
}

@Component({
    selector: "ViewPromotions",
    moduleId: module.id,
    styleUrls: ["./view-promotions.component.css"],
    templateUrl: "./view-promotions.component.html"
})
export class ViewPromotionsComponent implements OnInit {

    promotions: [string[]] =[[]];
    promoInfo: string[] = [];
    result = null;
    items = [];
    index = 0;
    promotionsForList: Array<Promotion>;

    constructor(private company: Company) {
        // Use the component constructor to inject providers.
        this.promotionsForList = [];
    }
    ngOnInit(): void {
        // Init your component properties here.
        firebase.getValue('/promotions/'+this.company.getCompanyName())
        .then(result =>{
            this.result = result;
            var length = this.getLength();
            this.checkPromotions(length);
        })
    }

    getLength(){
        var length = 0;
        for(var item in this.result.value){
            this.items.push(item);
            console.log("item"+item);
            length++;
        }
        return length;
    }

    checkPromotions(length){
        if(this.index<length){
            this.getPromotions(length);
        }
        else{
            for(var i = 0; i < this.promotions.length; i++) {
                this.promotionsForList.unshift(new Promotion(this.promotions[i][0], this.promotions[i][1]));
                
            }
            this.promotionsForList.pop();

        }
    }
    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    getPromotions(length){
        firebase.getValue('/promotions/'+this.company.getCompanyName()+'/'+this.items.pop())
        .then(result=>{
            console.log("company"+this.company.getCompanyName());
            this.promoInfo =[];
            this.promoInfo.push(result.value.promoName);
            this.promoInfo.push(result.value.promoDesc);
            this.promotions.push(this.promoInfo);
            this.index++;
            this.checkPromotions(length);
        })
    }
}
