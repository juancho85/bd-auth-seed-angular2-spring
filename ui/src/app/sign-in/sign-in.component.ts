import {Component, OnInit} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AuthService } from "../shared/auth.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  userName: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  onSignin() {
    this.authService.signinUser(this.myForm.value);
  }

  ngOnInit():any {
    console.log("ngOnInit called");
    this.authService.fetchUser();
    this.myForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
