import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { AuthService } from '@auth0/auth0-angular';

interface Response {
  name: string;
}

@Component({
  selector: 'app-test-api',
  standalone: true,
  imports: [],
  templateUrl: './test-api.component.html',
  styleUrl: './test-api.component.css',
})
export class TestApiComponent {
  response: string | null = null;
  constructor(public auth: AuthService, private http: HttpClient) {}

  ngOnInit(): void {}

  callApi(): void {
    this.http
      .get(encodeURI('http://localhost:8010/test_auth'), {
        responseType: 'text',
      })
      .subscribe((data) => {
        console.log(data);
        this.response = data.toString();
      });
  }
}
