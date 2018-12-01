import { Injectable } from "@angular/core";

@Injectable()
export class User {
    private userId;

    constructor() {}

    setUserId(iUserId: string) {
        this.userId = iUserId;
    }

    getUserId() {
        return this.userId;
    }
}