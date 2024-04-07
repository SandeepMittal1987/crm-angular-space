import { Component, OnInit } from '@angular/core';
import { Button, ImageControl, InputControl, LoginModel, LoginModelClass, PopupService, StaticLabelControl } from 'core-angular-kit';
import { ConfigService } from '../core/services/util-service.service';
import { ApiService } from '../core/services/api-service/api.service';
import { AppConfigService } from '../core/services/app-config.service';
import { UiMessageService } from '../core/services/ui-message-service/ui-message.service';
import { Router } from '@angular/router';
import { ForgotPassword, ForgotPasswordComponent } from '../../../../core-angular-kit/src/public-api';
import { catchError } from 'rxjs/operators';
import { ApisService } from '../core/api/apis.service';

@Component({
  selector: 'crm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  crm: LoginModel;
  constructor(
    private appLoader: ConfigService,
    private modalService: PopupService,
    private apiService: ApiService,
    private appConfigService: AppConfigService,
    private uiMessage: UiMessageService,
    private router: Router,
    private appService: ApisService
  ) { }

  ngOnInit() {
    sessionStorage.clear();
    this.crm = new LoginModel();
    this.declareLanguage();
  }
  declareLanguage() {
    this.crm.language.dropdownListItems = [
      { code: 'en', value: 'EN' },
      { code: 'ru', value: 'RU' },
    ];
    this.crm.language.appearance = '';
    this.crm.language.controlId = 'languages';
    this.crm.language.label = '';
    this.crm.language.isMandatory = true;
    this.crm.language.value = this.appLoader.getLocaleId();
  }

  loginClick() {
    if (this.crm.userId.value == '' || this.crm.password.value == '') {
      if (this.crm.userId.value == '') {
        this.crm.userId.isValid = false;
        this.crm.userId.tooltipMsg = 'LABELS.USERIDEMPTYERROR';
      }
      if (this.crm.password.value == '') {
        this.crm.password.isValid = false;
        this.crm.password.tooltipMsg = 'LABELS.PWDEMPTYERROR';
      }
    } else {
      const params = this.getParams();
      this.appService.login(params).subscribe((validate: LoginModelClass) => {
        this.appConfigService.setAuthTokenAndUser(validate.token);
        this.uiMessage.success('LOGINSUCCESS');
        this.router.navigateByUrl('/dashboard')
      });
    }
  }

  forgotPopup() {
    const forgetPassword = new ForgotPassword();
    const data = this.crm.forgotPasswordPopup(forgetPassword);
    this.modalService.dialogConfig.panelClass = 'forgotPasswordOverlay';
    this.modalService.dialogConfig.data= data;
    const modalInstance = this.modalService.open(ForgotPasswordComponent);
    modalInstance.disableClose = false;

    this.crm.forgotPasswordPopup(forgetPassword);
    modalInstance.componentInstance.lib = data; 
    modalInstance.componentInstance.nextEvent.subscribe((e) => {
      const forgotInput = modalInstance.componentInstance.lib.emailInput.value ? modalInstance.componentInstance.lib.emailInput.value : '';
      let isInValidForgotInput = false;
      if((new String(forgotInput).length>10 && forgotInput.indexOf('@')==-1) || (isNaN(Number(forgotInput)) && new String(forgotInput).length<=10) || (new String(forgotInput).length==0)){
        isInValidForgotInput = true;
        modalInstance.componentInstance.lib.emailInput.tooltipMsg = 'LABELS.USERIDEMPTYERROR';
      }
      if(forgotInput && !isInValidForgotInput){
        modalInstance.componentInstance.lib.emailInput.tooltipMsg ='';
        this.appService.forgotPassword(forgotInput)
          .pipe(catchError((err) => {
            console.log(err);
            return err;
          }))
          .subscribe({
            next: (validate) => {
              modalInstance.componentInstance.lib = this.crm.emailOtp(
                modalInstance.componentInstance.lib
              );
              this.uiMessage.success('OTPSENT');
            },
            error: (e) => {
              this.uiMessage.error(e,false);
              console.log('OTP API error', e);
            },
          });
      }

    });
    modalInstance.componentInstance.otpNxtClick.subscribe((ev) => {
      if(modalInstance.componentInstance.lib.otp){
        this.uiMessage.close();
        if(new String(modalInstance.componentInstance.lib.otp).length==6){
          modalInstance.componentInstance.lib.otpConfig.inputClass='';
          modalInstance.componentInstance.lib.optError = new StaticLabelControl('',"");
          const params = this.otpGetParams(modalInstance.componentInstance.lib);
          this.appService.otpValidate(params)
          .pipe(catchError((err) => {
            console.log(err);
            return err;
          }))
          .subscribe({
            next: (validate) => {
              modalInstance.componentInstance.lib = this.crm.resetPassword(
                modalInstance.componentInstance.lib
              );
              this.uiMessage.success('OTPVERIFIED');
            },
            error: (e) => {
              this.uiMessage.error(e,false);
              console.log('OTP API error', e);
            },
          });
        } else {
          modalInstance.componentInstance.lib.otpConfig.inputClass='otp-error';
          modalInstance.componentInstance.lib.optError = new StaticLabelControl('',"LABELS.OTPERROR");
        }
      } 
    });


    modalInstance.componentInstance.otpBack.subscribe((e)=>{
      this.uiMessage.close();
      modalInstance.componentInstance.lib = this.crm.forgotPasswordPopup(
        modalInstance.componentInstance.lib
      );
    })

    modalInstance.componentInstance.resetPassword.subscribe((e) => {
      this.uiMessage.close();
      let isInvalidReset = false; 
      if(modalInstance.componentInstance.lib.newPwd.value ==''){
        isInvalidReset = true;
        modalInstance.componentInstance.lib.newPwd.tooltipMsg = "LABELS.NEWPASSWORDERROR";
      }
      if(modalInstance.componentInstance.lib.resetPwd.value =='' || modalInstance.componentInstance.lib.resetPwd.value !== modalInstance.componentInstance.lib.newPwd.value){
        isInvalidReset = true;
        modalInstance.componentInstance.lib.resetPwd.tooltipMsg = "LABELS.CONFIRMPASSWORDERROR";
      }
      if(!isInvalidReset){
        const params = this.changePwdParams(modalInstance.componentInstance.lib);
        this.appService.changePassword(params).subscribe((validate) => {
          modalInstance.close();
          this.uiMessage.success('PASSWORDRESET');
        });
      }
    });

    modalInstance.componentInstance.resendClick.subscribe((e) => {
      this.uiMessage.close();
        this.appService.forgotPassword(modalInstance.componentInstance.lib.emailInput.value)
          .pipe(catchError((err) => {
            console.log(err);
            return err;
          }))
          .subscribe({
            next: (validate) => {
              this.uiMessage.success('OTPSENT');
            },
            error: (e) => {
              console.log('OTP API error', e);
            },
          });
    })
  }

  otpGetParams(otpParam){
    const searchParam: any = {};
    searchParam.otp = otpParam.otp ? otpParam.otp : '';
    searchParam.type = otpParam.emailInput.value !== '' ?  otpParam.emailInput.value : '';
    return searchParam;
  }

  private getParams(): any {
    const searchParam: any = {};
    searchParam.email = this.crm.userId.value !== '' ? this.crm.userId.value.indexOf('@') > -1 ? this.crm.userId.value : 'sandeep.mittal@bulkbuyindia.com' : '';
    searchParam.phone = this.crm.userId.value.indexOf('@') == -1 ? this.crm.userId.value : '';
    searchParam.password = this.crm.password.value ? this.crm.password.value : '123456';
    return searchParam;
  }

  changePwdParams(resetParams){
    const searchParam: any = {};
    searchParam.newPassword = resetParams.newPwd.value !== '' ? resetParams.newPwd.value : '';
    searchParam.confirmPassword = resetParams.resetPwd.value !== '' ?  resetParams.resetPwd.value : '';
    return searchParam;
  }
}
