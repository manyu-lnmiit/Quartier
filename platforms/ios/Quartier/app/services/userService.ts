import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import { User } from "../model/User"


@Injectable()
export class UserService {
  private apiSignupUrl = "http://127.0.0.1:8080/Iginita/webapi/user/signUp";
  private apiLoginUrl = "http://127.0.0.1:8080/Iginita/webapi/user/login";
  constructor(private http: Http) {}

  register (user: User): Observable<User> {
    console.log("inside service");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("username = " +user.emailId+ "password id is " +user.password)
    return this.http.post(
      this.apiSignupUrl,
      JSON.stringify({
        userName: user.userName,
        emailId: user.emailId,
        password: user.password,
        firstName: user.firstName,
        lastName:user.lastName
        
      }),
      { headers: headers }
    ).map(res => res.json())
    .catch(this.handleErrors);
  }

  login(user: User) : Observable<User> {
    console.log("insidelogin service");
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    console.log("username = " +user.userName+ "password id is " +user.password)
    return this.http.post(
      this.apiLoginUrl,
      JSON.stringify({
        userName: user.userName,
        password: user.password
      }),
      { headers: headers }
    ).map(res => res.json())
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
      console.log("error happened.")
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}