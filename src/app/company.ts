import { Injectable } from "@angular/core";

@Injectable()
export class Company {
    private companyName: string;
    constructor() {}

    setCompanyName(companyName: string){
        this.companyName = companyName;
    }

    getCompanyName(){
        return this.companyName;
    }
}