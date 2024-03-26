import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfigService } from '../services/app-config.service';
import { Observable, catchError, finalize, of, tap } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

import { UiMessageService } from '../services/ui-message-service/ui-message.service';
import { HTTP_STATUS_CODE } from 'core-angular-kit';


@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
private cacheBucket = new Map<string,any>();
typeSelected: string;

constructor(private spinnerService:NgxSpinnerService,private appConfigService: AppConfigService, private uiMessage: UiMessageService) { 
  this.typeSelected = 'ball-scale-multiple';
}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  // if((req.url.indexOf('/userLogin/email') == -1) || (req.url.indexOf('/userLogin/mobile') == -1)){
    if(this.appConfigService.TOKEN){
      req = req.clone({
        setHeaders: {
          Authorization: this.appConfigService.TOKEN
        }
      })
    }
  // }
  return next.handle(req).pipe(
    tap(event =>{
      if(event instanceof HttpResponse){
        if(event.status !== HTTP_STATUS_CODE.SUCCESS){
          // const errorObj = this.parseObjectInCamelCase(event?.body);
          // const newError = {cmsKey: errorObj?.errorCode};
          this.uiMessage.error(event.statusText, false);
        }
      }
    }),
    catchError(error=>{
      if(error && error.error && error.error.message){
        if(error.url.indexOf("otpValidate")==-1){
          sessionStorage.clear();
          window.location.href = this.appConfigService.LOGIN_URL;
        }
        this.uiMessage.error(error.error.message, false);
      } else {
        throw Error(error.message);
      }
      return of(error);
    }),
    finalize(() => this.spinnerService.hide())
  )
}

// parseObjectInCamelCase(sourceObj){
//   if(!sourceObj) return;
//   const convertedObj = {errorCode: '', canContinue: false};
//   Object.keys(sourceObj).forEach(item => {
//     convertedObj[item.replace(item.charAt(0), item.charAt(0).toLowerCase())] = sourceObj[item];
//   });
//   return convertedObj;
// }
}
