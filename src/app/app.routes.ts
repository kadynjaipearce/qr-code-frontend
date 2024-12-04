import { Routes } from '@angular/router';

import { AuthGuard, AuthService } from '@auth0/auth0-angular';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { map } from 'rxjs';

const redirectToDashboard = (authService: AuthService) => {
  return authService.isAuthenticated$.pipe(
    map((isAuth) => (isAuth ? '/dashboard' : '/'))
  );
};

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
];
