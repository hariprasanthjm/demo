import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../../../shared/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  returnUrl: string;

  mobile_number = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [Validators.required]);


  loginForm: FormGroup = this.builder.group({
    mobile_number: this.mobile_number,
    password: this.password
  });

  constructor(private builder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthenticationService
            ) { }

  ngOnInit() {
    this.authenticationService.logout();

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/vehicles';
  }

  login () {
    const mob_no = parseInt(this.loginForm.value.mobile_number, 10);
    const pwd = this.loginForm.value.password;
    console.log(mob_no, typeof mob_no);

    this.authenticationService.login(mob_no, pwd).subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
          console.log('Error in Login', error);
        });
    // Attempt Logging in...
  }

}
