import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { User } from "../model/User"


@Injectable()
export class UserService {
  private apiSignupUrl = "http://127.0.0.1:8080/Iginita/webapi/user/signUp";
  constructor(private http: Http) {}

  register (user: User): Observable<User> {
    console.log("inside service");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("username = " +user.email+ "password id is " +user.password)
    return this.http.post(
      this.apiSignupUrl,
      JSON.stringify({
        userName: user.username,
        emailId: user.email,
        password: user.password,
        firstName: user.firstName,
        lastName:user.lastName
        
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
      console.log("error happened.")
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}