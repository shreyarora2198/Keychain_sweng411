import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../user";
import { EventData } from "tns-core-modules/ui/page/page";
import { ArgumentOutOfRangeError } from "rxjs";
import { waitForMap } from "@angular/router/src/utils/collection";
import * as dialogs from "tns-core-modules/ui/dialogs";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");

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
        // Use the component constructor to inject providers.
    }
    ngOnInit(): void {
        // Init your component properties here.
    }
    pageLoaded(args: EventData): void {
        
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
                            firebase.getValue('/companies/'+this.uid)
                            .then(result => {
                                console.log(result);
                                if(result.value === null){
                                    this.user.setCompany(false);
                                }
                                else {
                                    this.user.setCompany(true);
                                }
                            })
                            .catch(error => console.log("Error: " + error));
                            this.router.navigate(["/cards"])
                        })
            .catch((error) => 
                console.log(error),
                dialogs.alert({
                    title: "Incorrect Username or Password",
                    message: "If you do not have an account, you can create one by clicking \"Sign Up \" below.",
                    okButtonText: "OK"
                }).then(() => {
                    console.log("Dialog closed!");
                })
                );
    }

    routeSignup(): void {
        this.router.navigate(["/signup"]);
    }
}