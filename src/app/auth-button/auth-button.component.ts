import { AsyncPipe, DOCUMENT, NgIf } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-button',
  standalone: true,
  imports: [AsyncPipe, NgIf],
  templateUrl: './auth-button.component.html',
  styleUrl: './auth-button.component.css',
})
export class AuthButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}
