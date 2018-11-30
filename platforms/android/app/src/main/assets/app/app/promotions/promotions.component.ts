import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

class DataItem {
    constructor(public name: string) { }
}

@Component({
    selector: "Promotions",
    moduleId: module.id,
    styleUrls: ["./promotions.component.css"],
    templateUrl: "./promotions.component.html"
})

export class PromotionsComponent implements OnInit {
    public promtnList: Array<DataItem>
    private counter: number;

    constructor() {
        this.promtnList = [];
        this.counter = 0;
        for (var i = 0; i < 10; i++) {
            this.promtnList.push(new DataItem("data item " + i));
            this.counter = i;
        }
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    addPromotion(){
        this.promtnList.push(new DataItem("data item " + this.counter));
        this.counter++;
        console.log("------------------------ ItemTapped: ");
    }
}
