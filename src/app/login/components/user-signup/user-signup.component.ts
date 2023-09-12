import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent {
  fullname = new FormControl();
  username = new FormControl();
  password = new FormControl();
  email = new FormControl();
  @Output("disableSignUp") disableSignUp: EventEmitter<any> = new EventEmitter();

  reEnteredPassword = new FormControl();

  constructor(private http: HttpClient) {
  }

  public signUpUser() {
    let headers = new HttpHeaders({
      // "Content-Type": "application/json; charset=utf-8",
      "Access-Control-Allow-Origin": "*"
    });
    let body = { "username": this.username.value, "password": this.password.value, "fullname": this.fullname.value, "email": this.email.value };
    console.log(body);

    this.http.post<any>('http://localhost:5000/signUpUser/', body, { headers: headers }
    ).subscribe((data) => {
      if (data["userSignedUp"] == true) {
        // alert("USER INSERTED TO DB");
      }
    });
    this.disableSignUp.emit();
    return;
  }
}
