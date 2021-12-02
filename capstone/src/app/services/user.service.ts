import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from '../models/user';
import firebase from '@firebase/app-compat';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User>

  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        //Check if they are logged in
        if(user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          //If they are logged out
          return of(null)
        }
      })
    )
  }

  //Authenticates user with Google via firebase
  async signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider)
    return this.updateUser(credential.user)
  }

  //Signs the user out
  async signOut() {
    await this.afAuth.signOut()
    this.router.navigate(['/'])
  }

  //Saves user info to firebase
  private updateUser(user: any){
    const userInfo: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`)

    return userInfo.set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }, {merge:true})
  }


}
