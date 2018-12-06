import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../user";
import { EventData } from "tns-core-modules/ui/page/page";
import * as dialogs from "tns-core-modules/ui/dialogs";
const firebase = require("nativescript-plugin-firebase");

@Component({
    selector: "Login",
    moduleId: module.id,
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    email : string = "";
    password: string = "";
    uid: string = "";
    constructor(private router: Router,
                private user: User) {
    }
    ngOnInit(): void {
        // Init your component properties here.
    }

    routeKeychainCard(): void {
        firebase.login(
            {
                type: firebase.LoginType.PASSWORD,
                passwordOptions: {
                email: this.email,
                password: this.password
              }
            })
            .then(result => {
                this.uid=JSON.stringify(result.uid)
                this.user.setUserId(this.uid);
                this.user.setEmail(JSON.stringify(result.email))
                firebase.getValue('/companies/'+this.uid)
                .then(result => {
                    if(result.value === null){
                        this.user.setCompany(false);
                        this.user.setCompanyName(null);
                        this.router.navigate(["/cards"])
                    }
                    else {
                        this.user.setCompany(true);
                        this.user.setCompanyName(JSON.stringify(result.value.company));
                        this.router.navigate(["/create-promotion"])
                    }
                })
                .catch(error => alert("Error: " + error));
            })
            .catch((error => {
                dialogs.alert({
                    title: "Incorrect Username or Password",
                    message: "If you do not have an account, you can create one by clicking \"Sign Up \" below.",
                    okButtonText: "OK"
                }).then(() => {
                })
            }
            ));
    }

    routeSignup(): void {
        this.router.navigate(["/signup"]);
    }
}
