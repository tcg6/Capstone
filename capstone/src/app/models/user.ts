export class User {

    email: string;
    photoURL?: string;
    displayName?: string;
    uid: string;

    constructor(userObj: any) {
        this.email = userObj.email;
        this.photoURL = userObj.photoURL;
        this.displayName = userObj.displayName;
        this.uid = userObj.uid;
    }
}