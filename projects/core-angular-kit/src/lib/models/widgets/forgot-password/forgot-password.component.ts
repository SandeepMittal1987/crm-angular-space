import {  Component,  EventEmitter,  Inject,  Input,  OnInit,  Optional,  Output} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ForgotPassword } from '../../../widgets/forgot-password';

@Component({
  selector: 'lib-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent implements OnInit {
  @Input() lib: ForgotPassword;
  @Output() nextEvent = new EventEmitter();
  @Output() otpNxtClick = new EventEmitter();
  @Output() resendClick = new EventEmitter();
  @Output() otpBack = new EventEmitter();
  @Output() resetPassword = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.lib = data;
  }

  ngOnInit() {}

  modalClose() {
    this.dialogRef.close();
  }

  nextClick(event) {
    this.nextEvent.emit(event);
  }

  otpNextClick(event) {
    this.otpNxtClick.emit(event);
  }
  onOtpChange(otp) {
    this.lib.otp = otp;
  }

  otpBackbutton(){
    if(this.otpBack.observers.length>0){
      this.otpBack.emit();
    }
  }

  resetPasswordClick(ev){
    if(this.resetPassword.observers.length>0){
      this.resetPassword.emit();
    }
  }

  resendOtp(){
    this.resendClick.emit();
  }
}
