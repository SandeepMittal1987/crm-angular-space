import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
TOKEN ='';
LOGIN_USER = '';
LOGIN_URL ='';
URLS:any = {};

constructor(private httpClient: HttpClient, private router: ActivatedRoute) { }

load(): Promise<any>{
    return new Promise<any>((resolve,reject) => {
      this.httpClient.get('./assets/config/config.json').subscribe(res => {
        this.initAppConfig(res);
        resolve(res);
      },
      error =>{
        reject(error);
      })
    })
}

private initAppConfig(appConfig: any):void{
  const hostName = window.location.host;
  if(appConfig && appConfig.environments && appConfig.environments[hostName]){
    this.LOGIN_URL = appConfig.environments[hostName].loginUrl;
    this.URLS = appConfig.environments[hostName].urls;
  } else {
    this.LOGIN_URL = appConfig.environments.default.loginUrl;
    this.URLS = appConfig.environments.default.loginUrl;
  }
  // if(appConfig.mock === true){
  //   this.URLS = appConfig.mockUrls;
  // }
  // this.setAuthTokenAndUser();
  // this.restrictUnAuthorizedLogin();
}
  setAuthTokenAndUser(token): void {
    const urlParams = this.getAuthTokenAndUser(token);
    this.TOKEN = urlParams.token;
    this.LOGIN_USER = urlParams.empId;
  }

  private getAuthTokenAndUser(token): any{
    const tokenAndUser = {token:'', username: ''};
    const urlParams = token;
    if(urlParams.token && urlParams.empId){
      sessionStorage.setItem('token', urlParams.token);
      sessionStorage.setItem('username', urlParams.empId);
      tokenAndUser.token = urlParams.token;
      tokenAndUser.username = urlParams.empId;
    }
    else if(sessionStorage.getItem('token') && sessionStorage.getItem('empId')){
      tokenAndUser.token = sessionStorage.getItem('token');
      tokenAndUser.username = sessionStorage.getItem('empId');
    }

    return tokenAndUser;
  }

  get isLoggedIn(): boolean {
    const user = localStorage.getItem('token');
    return user ? true : false;
  }


  private restrictUnAuthorizedLogin(): void{
    if(!this.TOKEN){
      window.location.replace(this.LOGIN_URL);
    }
  }
}
