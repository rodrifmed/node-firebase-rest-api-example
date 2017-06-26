import * as admin from "firebase-admin";

let serviceAccount = require("../path/to/serviceAccountKey.json");

export function initFirebase(): void {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "<YOUR_DATA_URL>"
    });
}
