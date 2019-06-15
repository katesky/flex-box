import { Injectable } from '@angular/core';
import { Router ,CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { environment } from 'src/environments/environment';
import { RestUrlService } from 'src/app/shared/services/rest-url.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private router: Router, private urlService: RestUrlService ) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['']);
      return false;
    }
    this.urlService.post("auth activated");//
    return true;
  }
}
