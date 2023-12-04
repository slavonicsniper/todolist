// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  // loginWithDiscord() {
  //   // Redirect the user to your backend route for Discord authentication
  //   this.http
  //     .get('http://localhost:3333/api/auth/login', { withCredentials: true })
  //     .subscribe(() => {
  //       this.router.navigate(['/']);
  //     });
  // }

  loginWithDiscord() {
    // Redirect the user to your backend route for Discord authentication
    const authUrl = 'http://localhost:3333/api/auth/login';

    // Open the authentication link in a new tab
    window.location.href = authUrl;

    // Redirect the user to the home page (optional)
    // this.router.navigate([authUrl]);
  }
}
