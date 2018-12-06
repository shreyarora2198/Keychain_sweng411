import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
const firebase = require("nativescript-plugin-firebase");
import {User} from "../user";
import { Company } from "../company";
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

    companyResult = null;
    companyNames = [];
    indexCompanies = 0;
    public promotionsForList: Array<Promotion>;

    constructor(private router: Router,
                private user: User,
                private company: Company) {
        this.promotionsForList = [];
    }

    ngOnInit(): void {
        // Init your component properties here.
        firebase.getValue('/promotions/')
        .then(result=>{
            this.companyResult = result;
            var lengthCompanies = this.getLengthCompanies();
            this.checkCompanies(lengthCompanies);
        })
        .catch(error=>alert("Error: "+ error));
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    public onItemTap(args) {
        this.company.setCompanyName(this.companyNames[args.index]);
        this.router.navigate(["/view-promotions"]);
    }

    getLengthCompanies(){
        var length;
        for(var item in this.companyResult.value){
            this.companyNames.push(item);
            length++;
        }
        return length;
    }
    
    checkCompanies(lengthCompanies){
        if(this.indexCompanies<lengthCompanies){
            this.getCompaniesNames(lengthCompanies);
        }
    }

    getCompaniesNames(lengthCompanies){
        this.indexCompanies++;
        this.checkCompanies(lengthCompanies);
    }
}
