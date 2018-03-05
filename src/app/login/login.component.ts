import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  signInWithTwitter() {
      this.authService.signInWithTwitter()
      .then((res) => {
          this.router.navigate(['dashboard-welcome'])
        })
      .catch((err) => console.log(err));
    }
    signInWithFacebook() {
      this.authService.signInWithFacebook()
      .then((res) => {
          this.router.navigate(['dashboard-welcome'])
        })
      .catch((err) => console.log(err));
    }
    signInWithGoogle() {
      this.authService.signInWithGoogle()
      .then((res) => {
          this.router.navigate(['dashboard-welcome'])
        })
      .catch((err) => console.log(err));
    }
}
