import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../user";

@Component({
    selector: "Login",
    moduleId: module.id,
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {

    constructor(private router: Router,
                private user: User) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.user.setUserId("123456789");
    }

    routeKeychainCard(): void {
        this.router.navigate(["/cards"]);
    }

    routeSignup(): void {
        this.router.navigate(["/signup"]);
    }
}