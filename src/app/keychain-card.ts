import { Injectable } from "@angular/core";

@Injectable()
export class KeychainCardClass {
    private barcodeId: string;
    private barcodeFormat: string;
    private cardLoc: string;
    private cardName: string;

    constructor() {}

    setBarcodeId(iBarcodeId: string) {
        this.barcodeId = iBarcodeId;
    }

    getBarcodeId() {
        return this.barcodeId;
    }

    setBarcodeFormat(iBarcodeFormat: string){
        this.barcodeFormat = iBarcodeFormat;
    }

    getBarcodeFormat(){
        return this.barcodeFormat;
    }

    setCardLocation(iCardLoc: string){
        this.cardLoc = iCardLoc;
    }

    getCardLocation(){
        return this.cardLoc;
    }

    setCardName(iCardName: string){
        this.cardName = iCardName;
    }
    
    getCardName(){
        return this.cardName;
    }
}