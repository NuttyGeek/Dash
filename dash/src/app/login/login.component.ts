import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private toast: MatSnackBar) {
    this.loginForm = this.fb.group({
      username: new FormControl(),
      password: new FormControl()
    });
  }

  login() {
    console.log(':: form', this.loginForm.value);
    const { username, password } = this.loginForm.value;
    this.authService.login(username, password).then((res) => {
      this.toast.open(`Login Success`, 'OK');
    }, (err) => {
      this.toast.open(`Error Logging in`, 'OK');
    });
  }

}
