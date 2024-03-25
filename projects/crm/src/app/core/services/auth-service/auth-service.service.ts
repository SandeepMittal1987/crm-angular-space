import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AppConfigService } from '../app-config.service';
import { ApiService } from '../api-service/api.service';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService implements CanActivate {
  authMetadata: AuthMetadata = new AuthMetadata();
  isLoggedIn: boolean;
  constructor(
    private appConfig: AppConfigService,
    private apiService: ApiService
  ) {}

  getAuthMetadata(): Observable<AuthMetadata> {
    if (this.authMetadata.isCached) {
      return of(this.authMetadata);
    }
    const url = this.appConfig?.URLS?.privilege?.toString();

    return this.apiService.GET(url).pipe(
      map((value) => {
        this.authMetadata.roles = {
          screens: value['SCREENS'] ? value['SCREENS'] : {},
        };
        this.authMetadata.isCached = true;
        return this.authMetadata;
      })
    );
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.appConfig.TOKEN) {
      return true;
    }
    let path = this.appConfig.LOGIN_URL;
    window.location.href = path;
    return false;
  }
}

export class AuthMetadata {
  isCached = false;
  roles: any = {
    screens: {},
  };
}
