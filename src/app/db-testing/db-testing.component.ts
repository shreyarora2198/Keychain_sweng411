import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "DbTesting",
    moduleId: module.id,
    styleUrls: ["./db-testing.component.css"],
    templateUrl: "./db-testing.component.html"
})
export class DbTestingComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    routeLogin(): void {
        this.router.navigate(["/login"]);
    }
}