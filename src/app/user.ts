import { Injectable } from "@angular/core";

@Injectable()
export class User {
    private userId;
    private company: boolean;
    private companyName: string;
    private email: string;
    constructor() {}

    setUserId(iUserId: string) {
        this.userId = iUserId;
    }

    getUserId() {
        return this.userId;
    }

    setCompany(company: boolean){
        this.company = company;
    }

    getCompany(){
        return this.company;
    }

    setCompanyName(companyName: string){
        this.companyName = companyName;
    }

    getCompanyName(){
        return this.companyName;
    }

    setEmail(email: string){
        this.email = email;
    }
    
    getEmail(){
        return this.email;
    }
}