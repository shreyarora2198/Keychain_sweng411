import { firestore } from "./firebase";
export declare type JDocumentReference = com.google.firebase.firestore.DocumentReference;
export declare class QuerySnapshot implements firestore.QuerySnapshot {
    private snapshot;
    private _docSnapshots;
    constructor(snapshot: com.google.firebase.firestore.QuerySnapshot);
    readonly docs: firestore.QueryDocumentSnapshot[];
    /**
     * @deprecated use the "docs" property instead
     */
    docSnapshots: firestore.DocumentSnapshot[];
    docChanges(options?: firestore.SnapshotListenOptions): firestore.DocumentChange[];
    forEach(callback: (result: firestore.DocumentSnapshot) => void, thisArg?: any): void;
}
