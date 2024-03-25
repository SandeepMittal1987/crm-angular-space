import { ErrorHandler, Injectable } from '@angular/core';
import { UiMessageService } from '../ui-message-service/ui-message.service';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandlerService implements ErrorHandler {

constructor(private uiMessageService: UiMessageService) { }
handleError(error: any): void {
  console.log('error: ', error);
  if(error && error.error && error.error.errorMessage){
    this.uiMessageService.error(error.error.errorMessage, false);
  } else {
    this.uiMessageService.error('FALLBACK');
  }
  
}
}
