import {Injectable} from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {

    }


    register(email, password): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    login(email, password): Promise<any> {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    }

    loginAsGuest(): Promise<any> {
        return firebase.auth().signInAnonymously();
    }

    logout(): Promise<any> {
        return firebase.auth().signOut();
    }


}
