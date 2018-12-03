import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { Router } from "@angular/router";

@Component({
    selector: "Logout",
    moduleId: module.id,
    styleUrls: ["./logout.component.css"],
    templateUrl: "./logout.component.html"
})
export class LogoutComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    routeLogin() {
        this.router.navigate(["/login"]);
    }
}
