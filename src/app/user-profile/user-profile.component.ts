import { AsyncPipe, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css',
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {}
}
