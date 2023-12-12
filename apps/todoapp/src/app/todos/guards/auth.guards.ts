// auth.guard.ts

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      switchMap((user) => {
        if (user && Object.keys(user).length > 0) {
          // User is authenticated, allow access
          return of(true);
        } else {
          // User is not authenticated, redirect to login
          // maybe we don't need this as it is never reached
          this.router.navigate(['/login']);
          return of(false);
        }
      })
    );
  }
}
