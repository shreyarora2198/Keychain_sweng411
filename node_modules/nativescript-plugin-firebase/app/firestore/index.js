"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var firebase = require("../../firebase");
// import * as firebaseSdk from 'firebase/app';
var firestore;
(function (firestore) {
    var Firestore /*implements firebaseSdk.firestore.Firestore*/ = /** @class */ (function () {
        function Firestore() {
        }
        Firestore.prototype.collection = function (collectionPath) {
            return firebase.firestore.collection(collectionPath);
        };
        Firestore.prototype.doc = function (path) {
            return firebase.firestore.docRef(path);
        };
        Firestore.prototype.FieldValue = function () {
            return {
                type: undefined,
                value: undefined,
                serverTimestamp: function () { return "SERVER_TIMESTAMP"; },
                delete: function () { return "DELETE"; },
                arrayUnion: function (fields) { return new firebase.firestore.FieldValue("ARRAY_UNION", fields); },
                arrayRemove: function (fields) { return new firebase.firestore.FieldValue("ARRAY_REMOVE", fields); }
            };
        };
        Firestore.prototype.GeoPoint = function (latitude, longitude) {
            return firebase.firestore.GeoPoint(latitude, longitude);
        };
        Firestore.prototype.runTransaction = function (updateFunction) {
            return firebase.firestore.runTransaction(updateFunction);
        };
        Firestore.prototype.batch = function () {
            return firebase.firestore.batch();
        };
        return Firestore;
    }());
    firestore.Firestore = Firestore;
})(firestore = exports.firestore || (exports.firestore = {}));
