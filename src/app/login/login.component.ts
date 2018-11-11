import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { User } from "../shared/user.model";
import { EventData } from "tns-core-modules/ui/page/page";
import { Page } from "ui/page";
import {TextField} from "ui/text-field";
import {Button} from "ui/button";
import { ArgumentOutOfRangeError } from "rxjs";
const firebase = require("nativescript-plugin-firebase");
const firebaseWebApi = require("nativescript-plugin-firebase/app");
let page;
let password;
// let pageLoaded = (args) =>{
//     let page = <Page>args.object;
//     let password = <TextField>page.getViewById("password");
//     let login =<Button>page.getViewById("login");
//     login.on('tap',function(args: EventData){
//         console.log(password)
//     });
// }
// export { pageLoaded }
@Component({
    selector: "Login",
    moduleId: module.id,
    styleUrls: ["./login.component.css"],
    templateUrl: "./login.component.html"
})
export class LoginComponent implements OnInit {
    user: User;
    
    constructor(private router: Router) {
        this.user = new User();
    }
    ngOnInit(): void {
        // Init your component properties here.
         
    }
    pageLoaded(args: EventData): void {
        page = <Page>args.object;
        password = <TextField>page.getViewById("password");
        console.log(page);
    }
    routeKeychainCard(): void {
        console.log(password.text);
        this.router.navigate(["/cards"]);
        
        // firebase.login(
        //     {
        //       type: firebase.LoginType.PASSWORD,
        //       passwordOptions: {
        //         email: ,
        //         password: 
        //       }
        //     })
        //     .then(result => JSON.stringify(result))
        //     .catch(error => console.log(error));
    }

    routeSignup(): void {
        this.router.navigate(["/signup"]);
    }
}