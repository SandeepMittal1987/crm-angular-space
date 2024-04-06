import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModelClass } from 'core-angular-kit';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  constructor(private http: HttpClient){}

login(param:LoginModelClass){
  return this.http.post(`https://uuor3m2oka.execute-api.ap-south-1.amazonaws.com/skydecorCRM/auth/v1/userLogin/emailOrPhone`, param);
}

forgotPassword(emailorMobile: string){
  return this.http.get(`https://uuor3m2oka.execute-api.ap-south-1.amazonaws.com/skydecorCRM/auth/v1/forgetPasswordEmail/${emailorMobile}`, {observe:'response'});
}

otpValidate(otpParams){
  return this.http.post(`https://uuor3m2oka.execute-api.ap-south-1.amazonaws.com/skydecorCRM/auth/v1/otpValidate`, otpParams);
}

changePassword(passwordParam){
  return this.http.post(`https://uuor3m2oka.execute-api.ap-south-1.amazonaws.com/skydecorCRM/auth/v1/changePassword`, passwordParam);
}

forgetPassword(newPassword){
  return this.http.post(`https://uuor3m2oka.execute-api.ap-south-1.amazonaws.com/skydecorCRM/auth/v1/forgetPassword`, newPassword);
}

}
