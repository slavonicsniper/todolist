// login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      if (user && Object.keys(user).length > 0) {
        this.router.navigate(['/']);
      }
    });
  }

  loginWithDiscord() {
    const authUrl = 'http://localhost:3333/api/auth/login';
    window.location.href = authUrl;
  }
}
