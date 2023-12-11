// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { DiscordUser } from '../types/discordUser.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {
    this.checkAuthStatus();
  }
  user$ = new BehaviorSubject<DiscordUser>({} as DiscordUser);

  checkAuthStatus() {
    this.http
      .get('http://localhost:3333/api/auth/status', { withCredentials: true })
      .subscribe(
        (user) => {
          console.log('user is authenticated');
          this.user$.next(user as DiscordUser);
        },
        // this is needed becausae without that after logout, the home page is accessible
        (error) => {
          // 401 response, user is not authenticated
          console.error('User is not authenticated:', error);
          this.router.navigate(['/login']);
        }
      );
  }

  logout() {
    this.user$.next({} as DiscordUser);

    this.http
      .get('http://localhost:3333/api/auth/logout', { withCredentials: true })
      .subscribe(
        () => {
          console.log('Logout successful');
        },
        (error) => {
          console.error('Logout error', error);
        }
      );

    this.router.navigate(['/login']);
  }
}
