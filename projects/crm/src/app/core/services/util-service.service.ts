import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
configUrl: any = [];
langplaceHolder = "{{lang}}";
lang = 'en';
constructor() { }

getLocaleId(): string{
  const url = window.location.href;
  let localeId ='en';
  // if(url.indexOf('/ru/')>-1){
  //   localeId = 'ru';
  // } uncomment for other language
  return localeId;
}

getApplicationUrl(urlName:string){
  const hostName = window.location.host;
  let url;
  if(this.configUrl){
    url = (this.configUrl[hostName] && this.configUrl[hostName][urlName]) ?
      this.configUrl[hostName][urlName] : (this.configUrl['default']? this.configUrl['default'][urlName] : this.configUrl[urlName]);
      url = typeof url == 'string' ? (url !== '' ? url.replace(this.langplaceHolder,this.lang): "") : url;
  }
  return url;
}

getEnvBasedUrl(url:any): string{
  const hostName = window.location.host;
  let config;
  if(url){
    config= url[hostName] ? url[hostName] : (url['default']? url['default'] : url);
  }
  return config;
}

}
