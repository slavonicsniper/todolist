import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
<<<<<<< HEAD
export class TodosComponent {}
=======
export class TodosComponent {
  user!: DiscordUser;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.user$.subscribe((user) => {
      this.user = user;
    });
  }
}
>>>>>>> a10bd6b9464e20b45888c354f2fcbfdcac3f4045
