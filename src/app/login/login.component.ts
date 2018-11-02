import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Login",
    moduleId: module.id,
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    routeKeychainCard(): void {
        this.router.navigate(["/cards"]);
    }

    routeSignup(): void {
        this.router.navigate(["/signup"]);
    }
}