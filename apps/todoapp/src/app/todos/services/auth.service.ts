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
          // User is authenticated, proceed with your application
          console.log('User is authenticated:', user);
          this.user$.next(user as DiscordUser);
        }
        // (error) => {
        //   // 403 response, user is not authenticated
        //   console.error('User is not authenticated:', error);
        //   this.router.navigate(['/login']);
        // }
      );
  }
}