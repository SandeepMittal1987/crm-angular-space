import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UiMessageService {
private config:MatSnackBarConfig;
constructor(private snackbar: MatSnackBar, private zone:NgZone, private translate: TranslateService) {
  this.config= new MatSnackBarConfig();
  this.config.panelClass = ['app-ui-message-container'];
  this.config.verticalPosition = 'top';
  this.config.horizontalPosition ='right';
 }

 error(msgErrorCode:string, isDisplayFallBack:boolean = true): void{
  this.config.panelClass = ['app-ui-message-container', 'error'];
  this.show(msgErrorCode, 'ERROR', isDisplayFallBack);
 }

 success(msgSuccessCode:string):void{
  this.config.panelClass = ['app-ui-message-container', 'success'];
  this.show(msgSuccessCode, 'SUCCESS');
 }

 warning(msgWarningCode: string): void{
  this.config.panelClass = ['app-ui-message-container', 'warning'];
  this.show(msgWarningCode, 'warning');
 }

 private show(message:string, type:string, isDisplayFallBack: boolean= true, config?:MatSnackBarConfig): void{
  if(isDisplayFallBack == true){
    this.translate.get('LABELS.MESSAGE').subscribe(res=>{
      const msg = res[type][message] ? res[type][message] : res[type]['FALLBACK'];
      config = config || this.config;
      this.zone.run(()=>{
        this.snackbar.open(msg,'x',config);
      })
    });
  } else {
    const msg= message;
    config = config || this.config;
    this.zone.run(()=>{
      this.snackbar.open(msg,'x',config);
    })
  }
 }

 close():void{
  this.snackbar.dismiss();
 }

}
