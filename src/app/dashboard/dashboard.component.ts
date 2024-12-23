import { Component } from '@angular/core';
import { AuthButtonComponent } from '../auth-button/auth-button.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { TestApiComponent } from '../test-api/test-api.component';
import { AuthService } from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
import Surreal, { RecordId } from 'surrealdb';

interface dynamicUrl {
  id: RecordId;
  server_url: string;
  target_url: string;
  created_at: Date;
  updated_at: Date;
}

type dynamicUrlResponse = {};

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [AuthButtonComponent, UserProfileComponent, TestApiComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public auth: AuthService, private http: HttpClient) {}
}
