import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
var firebase = require("nativescript-plugin-firebase");
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
    }   

    ngOnInit(): void {
        // Init your component properties here.
    }

    routeLogin(): void {
        firebase.createUser(
            {
                email: this.email,
                password: this.password
                
            }
        )
        .then((userRecord)=> {
          // See the UserRecord reference doc for the contents of userRecord
          if(this.isCompanyUser){
              firebase.setValue(
                '/companies'+'/'+JSON.stringify(userRecord.uid),
                {
                    email: this.email,
                    company: this.company
                })
          }else{
            firebase.setValue(
                '/users'+'/'+JSON.stringify(userRecord.uid),
                {
                    email: this.email
                })
          }
          this.router.navigate(["/login"]);
        })
        .catch(function(error) {
        });
    }

    toggleCompanyUser() {
        this.isCompanyUser = !this.isCompanyUser;
    }
}