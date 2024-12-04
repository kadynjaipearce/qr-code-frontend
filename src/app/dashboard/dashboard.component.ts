import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AuthButtonComponent, UserProfileComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
