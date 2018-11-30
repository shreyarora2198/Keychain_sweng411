import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
var firebase = require("nativescript-plugin-firebase");
var firebaseWebApi = require("nativescript-plugin-firebase/app");
@Component({
    selector: "Signup",
    moduleId: module.id,
    styleUrls: ["./signup.component.css"],
    templateUrl: "./signup.component.html"
})
export class SignupComponent implements OnInit {
    email : string = "";
    password: string = "";
    company: string = "";
    isCompanyUser = false;

    constructor(private router: Router) {
        // Use the component constructor to inject providers.
    }   

    ngOnInit(): void {
        // Init your component properties here.
    }

    routeLogin(): void {
        console.log(this.isCompanyUser);
        firebase.createUser(
            {
                email: this.email,
                password: this.password
                
            }
        )
        .then((userRecord)=> {
          // See the UserRecord reference doc for the contents of userRecord.
          console.log("Successfully created new user:", userRecord.uid);
          if(this.isCompanyUser){
              firebase.setValue(
                '/companies'+'/'+userRecord.uid,
                {
                    email: this.email,
                    company: this.company
                })
          }else{
            firebase.setValue(
                '/users'+'/'+userRecord.uid,
                {
                    email: this.email
                })
          }
        })
        .catch(function(error) {
          console.log("Error creating new user:", error);
        });
        // this.router.navigate(["/login"]);
    }

    toggleCompanyUser() {
        this.isCompanyUser = !this.isCompanyUser;
    }
}