import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RestServiceService} from "./rest-service.service";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {routing} from "./app.routing";
import {AuthService} from "./shared/auth.service";
import {AuthGuard} from "./shared/auth.guard";
import { ProtectedComponent } from './protected/protected.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    NavigationComponent,
    ProtectedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule
  ],
  providers: [RestServiceService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
