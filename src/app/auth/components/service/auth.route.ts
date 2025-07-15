import { Route } from '@angular/router';
import { loginComponent } from '../login/login';

export const AUTH_ROUTES: Route[] = [
  {
    path: 'login',
    component: loginComponent
  }
];
