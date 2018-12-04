import { Injectable } from "@angular/core";

@Injectable()
export class PromotionClass {
    private companyName: string;
    private companyPromotions: [string[]] = [[]];

    constructor() {}

    setCompanyName(iCompanyName: string) {
        this.companyName = iCompanyName;
    }
    
    getCompanyName() {
        return this.companyName;
    }

    setCompanyPromotions(iCompanyPromotions: [string[]]) {
        this.companyPromotions = iCompanyPromotions
    }
    
    getCompanyPromotions() {
        return this.companyPromotions;
    }
}