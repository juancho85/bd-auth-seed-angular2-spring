import {Component, OnInit} from '@angular/core';
import {RestServiceService} from "./rest-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(private restService: RestServiceService){}

  ngOnInit(){
    //this.restService.getResource();
  }
}
