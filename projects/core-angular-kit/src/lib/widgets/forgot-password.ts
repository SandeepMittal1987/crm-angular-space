import { NgOtpInputConfig } from "ng-otp-input";
import { Button, Link, DynamicLabelControl, ImageControl, InputControl, StaticLabelControl } from "../../public-api";
import { Icore } from "../models/interfaces/icore";

export class ForgotPassword implements Icore {
    isHide= false;
    width= '';
    crossBtn!: ImageControl;
    companyLogo!: ImageControl;
    passwordLock!:  ImageControl;
    forgotTitle!: StaticLabelControl;
    forgotHint!: StaticLabelControl;
    emailMobile!: StaticLabelControl;
    emailInput!: InputControl;
    backbutton!: ImageControl;
    backText!: StaticLabelControl;
    nextBtn!: Button;
    isinputDetailsShow: boolean;
    isOtpDetails: boolean;
    otpTitle!: StaticLabelControl;
    otpHint = new DynamicLabelControl('hint','OTPhint.FormatText','otp-hint',[],[]);
    otpNextBtn!: Button;
    resendLink!: Link;
    resendText!: StaticLabelControl;
    optError!: StaticLabelControl;
    isNewPassword = false;
    resetTitle!: StaticLabelControl;
    resetHint!: StaticLabelControl
    newPassword!: StaticLabelControl
    confirmPassword!: StaticLabelControl
    newPwd!:InputControl;
    resetPwd!: InputControl;
    resetPassword: Button;

    otpConfig :NgOtpInputConfig = {
        allowNumbersOnly: true,
        length: 6,
        isPasswordInput: false,
        disableAutoFocus: false,
        placeholder: ''
      };
    otp: number;
    constructor(
        public id: string = '',
        public title: string = '',){
    }
}
