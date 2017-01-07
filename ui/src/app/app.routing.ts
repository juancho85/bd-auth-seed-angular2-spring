import { RouterModule, Routes } from "@angular/router";

import { SignInComponent } from "./sign-in/sign-in.component";
import { AuthGuard } from "./shared/auth.guard";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ProtectedComponent} from "./protected/protected.component";

const APP_ROUTES: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'signup', component: SignUpComponent},
    {path: 'login', component: SignInComponent},
    {path: 'protected', component: ProtectedComponent, canActivate: [AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES);
