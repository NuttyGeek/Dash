import { Injectable, inject } from '@angular/core';
import { Auth, UserCredential, signInWithEmailAndPassword, user } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private auth: Auth = inject(Auth);
  public user$ = user(this.auth);

  constructor() { }

  login(username: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, username, password);
  }

}
