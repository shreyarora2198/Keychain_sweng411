import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "Signup",
    moduleId: module.id,
    styleUrls: ["./signup.component.css"],
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {

    isCompanyUser = false;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }   

    ngOnInit(): void {
        // Init your component properties here.
    }

    routeLogin(): void {
        this.router.navigate(["/login"]);
    }

    toggleCompanyUser() {
        this.isCompanyUser = !this.isCompanyUser;
    }
}