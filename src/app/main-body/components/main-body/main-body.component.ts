import { Component } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent {
  loggedIn: boolean = false;
  signUp: boolean = false;
  public successfulLogin() {
    this.loggedIn = true;
    this.signUp = false;
  }
  public loggedOut() {
    this.loggedIn = false;
    this.signUp = false;
  }

  public signUpUser() {
    this.loggedIn = false;
    this.signUp = true;
  }
  public disableSignUp() {
    this.loggedIn = false;
    this.signUp = false;
    console.log('disabled')
  }
}
