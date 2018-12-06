import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { User } from "../user";
import { Router } from "@angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "CreatePromotion",
    moduleId: module.id,
    styleUrls: ["./create-promotion.component.css"],
    templateUrl: "./create-promotion.component.html"
})
export class CreatePromotionComponent implements OnInit {

    promoName: string = "";
    promoDesc: string = ""

    constructor(private user: User,
                private router: Router) {
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }


    createPromotion() {
        firebase.push(
            'promotions/'+this.user.getCompanyName(),
            {
                promoName: this.promoName,
                promoDesc: this.promoDesc
            }
        );
        dialogs.alert({
            title: "Successful",
            message: "Promotion published!",
            okButtonText: "OK"
        }).then(() => {
            this.router.navigate(["/promotions"]);
        })
    }
}
