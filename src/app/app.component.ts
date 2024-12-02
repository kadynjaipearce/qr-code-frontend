import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AuthButtonComponent } from './auth-button/auth-button.component';
import { TestApiComponent } from './test-api/test-api.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavigationComponent,
    AuthButtonComponent,
    TestApiComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Track My Qr';
}
