import { Injectable } from "@angular/core";

@Injectable()
export class User {
    private userId;
    private company: boolean;
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
}