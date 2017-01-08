import {Injectable, EventEmitter} from "@angular/core";

import { User } from "./user.interface";
import { Router } from "@angular/router";
import {Http, Response, Headers} from "@angular/http";
import {HeaderOptions} from "./headerOptions";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  isUserAuthenticated: boolean = false;
  userPrincipal: any;
  userChanged = new EventEmitter<any>();

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
        (response: Response) => response.json())
      .subscribe(
        (data: any) => {
          console.log(data);
          this.isUserAuthenticated = data ? true : false;
          this.userPrincipal = data;
        }
      );
  }

  fetchUser() {
    this.http.get("http://localhost:8080/user")
      .map(
        (response: Response) => response.json())
      .subscribe(
        (data: any) => {
          console.log("user is logged in");
          console.log(data);
          this.isUserAuthenticated = data ? true : false;
          this.userPrincipal = data;
          this.userChanged.emit(this.userPrincipal);
        }
      );
  }

  getUser(){
    return this.userPrincipal;
  }

  logout() {
    this.isUserAuthenticated = false;
    this.userPrincipal = null;
    this.http.post("http://localhost:8080/logout", {}).subscribe(
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

}
