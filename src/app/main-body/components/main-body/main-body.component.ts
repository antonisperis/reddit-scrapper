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
  }
  public loggedOut() {
    this.loggedIn = false;
  }
}
