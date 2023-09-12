import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css', '../user-signup/user-signup.component.css']
})
export class UserLoginComponent {
  username = new FormControl();
  password = new FormControl();
  @Output("loginUser") loginUser: EventEmitter<any> = new EventEmitter();
  constructor(private http: HttpClient) {
    // this.isLoggedIn("tony", "1234");
  }
  public isLoggedIn() {
    const usernameVal = this.username.value;
    const passwordVal = this.password.value;
    let headers = new HttpHeaders({
      // "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    });
    let body = { "username": usernameVal, "password": passwordVal };

    this.http.post<any>('http://localhost:5000/loginUser/', body, { headers: headers }
    ).subscribe((data) => {
      if (data["response"] == true) {
        this.loginUser.emit();
      }

    });
  }
}
