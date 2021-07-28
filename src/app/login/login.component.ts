import { Component, OnInit } from '@angular/core';
import { LoginDto } from './login-objects';

import { Router } from '@angular/router';
import { LoginService } from '../auth/services/login.service';
import { SnackBarService } from '../components/snackbar/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: String;
  loginDto = new LoginDto();
  logou: boolean;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackbar: SnackBarService
  ) { }

  ngOnInit(): void {
  }

  loginClick(){
    this.router.navigate(["escolha", this.name]);
  }

}
