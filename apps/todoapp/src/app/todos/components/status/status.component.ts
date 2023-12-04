// status.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
})
export class StatusComponent {
  constructor(private http: HttpClient, private router: Router) {}

  checkStatus() {
    // Redirect the user to your backend route for Discord authentication
    this.http
      .get('http://localhost:3333/api/auth/status', { withCredentials: true })
      .subscribe(() => {
        this.router.navigate(['/']);
      });
  }
}
