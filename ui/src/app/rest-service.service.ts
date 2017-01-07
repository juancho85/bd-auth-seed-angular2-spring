import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RestServiceService {

  data: any;
  constructor(private http : Http) { }

  getResource(){
    return this.http.get("http://localhost:8080/resource")
      .map(
        (response: Response) => response.json())
      .subscribe(
        (data: any) => {
          this.data = data;
          console.log(JSON.stringify(this.data));
        }
      );
  }

}
