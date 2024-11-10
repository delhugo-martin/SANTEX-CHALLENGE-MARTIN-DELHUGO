import { CanActivateFn } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';

export const Auth2Guard: CanActivateFn = (route, state) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  if (loginService.isAuthenticated()) {
    return router.navigate(['/all_players']);
  } else {
    return true;
  }
};
