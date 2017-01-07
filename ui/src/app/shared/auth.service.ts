import { Injectable } from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";
import {Http, Response, Headers} from "@angular/http";
import {HeaderOptions} from "./headerOptions";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  isUserAuthenticated: boolean = false;
  userPrincipal: any;
  hasAuthenticationError: boolean;

  constructor(private router: Router, private http: Http) {}

  signupUser(user: User) {
    // TODO: if signUP OK then
    // this.router.navigate([ 'protected' ]);
  }

  createHeader(options: HeaderOptions, user?: User): Headers {
    let headers = new Headers();
    if(options.authorization){
      headers.append('authorization', 'Basic ' + btoa(user.email + ":" + user.password));
    }
    if(options.xRequestedWith){
      headers.append('X-Requested-With', 'XMLHttpRequest');
    }
    return headers;
  }


  signinUser(user: User) {
    let headers = this.createHeader({authorization:true, xRequestedWith: true}, user);
    this.http.get("http://localhost:8080/user", {
      headers: headers
    })
      .map(
        (response: Response) => response.json()).catch(this.handleLoginError)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.isUserAuthenticated = data ? true : false;
          this.userPrincipal = data;
        }
      );
  }

  private handleLoginError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      if(error.status === 401){
        console.log("setting authentication error");
        this.hasAuthenticationError = true;
      }
      errMsg = `${error.status} - ${error.statusText || ''}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errMsg);
  }

  logout() {
    this.isUserAuthenticated = false;
    this.userPrincipal = null;
    let headers = this.createHeader({authorization: false, xRequestedWith: true});
    this.http.post("http://localhost:8080/logout", {headers: headers}).subscribe(
      (data: any) => {
        console.log("logging out...");
        console.log(data);
        this.router.navigate(['/login']);
      }
    )

  }

  isAuthenticated() {
    return this.isUserAuthenticated;
  }

  getUser() {
    var user = null;
    if (user) {
      return user;
    } else {
      return null;
    }
  }
}
