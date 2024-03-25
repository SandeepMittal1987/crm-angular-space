import { Navigation } from "@angular/router";
import { Button } from "../models/core/button";
import { ImageControl } from "../models/core/image-control";
import { StaticLabelControl } from "../models/core/static-label-control";
import { InputControl } from "../models/core/input-control";
import { ExtendInputControl } from "../models/core/extend-input-control";
import { CheckboxControl } from "../models/core/checkbox-control";
import { DropdownListControl } from "../models/core/dropdown-list-control";
import { Header } from "./header";
import { ForgotPassword } from "./forgot-password";
import { DynamicLabelControl } from "../models/core/dynamic-label-control";
import { Link } from "../models/core/link";
export class LoginModel {
    loginCTA = new Button("LABELS.SEARCH");
    openEmail = new ImageControl('../assets/images/email-icon.svg','','','','','email-icon');
    supportCall = new ImageControl('../assets/images/PhoneCall-icon.svg','','','','','support-call');
    supportEmail = new StaticLabelControl('supportEmail','LABELS.SUPPORTEMAIL', 'email');
    supportMobile = new StaticLabelControl('supportMobile','LABELS.SUPPORTEMOBILE', 'mobile');
    loginText = new StaticLabelControl('','LABELS.LOGIN','login-text')
    aboutusText = new StaticLabelControl('','LABELS.ABOUTUS','aboutus-text');
    welcomeNote = new StaticLabelControl('','','welcome-note','LABELS.WELCOMENOTE');
    info = new StaticLabelControl('','LABELS.COMPANYINFO','company-info');
    loginHeading = new StaticLabelControl('','LABELS.LOGINHEADING','login-heading');
    loginMessage = new StaticLabelControl('','LABELS.LOGINTEXT','login-message');
    userId = new InputControl('userId','LABELS.USERID',true);
    password = new ExtendInputControl('password','LABELS.PASSWORD', true);
    rememberMe= new CheckboxControl(false,'rememberme','primary','LABELS.REMEMBERME','','rememberme');
    language = new DropdownListControl();
    sidelogo: ImageControl;
    userSymbol: ImageControl;
    aboutSymbol: ImageControl;
    instaSymbol:ImageControl;
    facebookSymbol: ImageControl;
    youtubeSymbol: ImageControl;
    xSymbol:ImageControl;
    linkedinSymbol: ImageControl;
    header:Header;
    navigation: Navigation;
    authrizedRoutes: string [] =[];
    constructor(){
        this.sidelogo= new ImageControl('../assets/images/SKYDECOR-Logo-latest.svg');
        this.userSymbol = new ImageControl('../assets/images/Profile-icon.svg');
        this.aboutSymbol = new ImageControl('../assets/images/About-us-icon.svg');
        this.instaSymbol= new ImageControl('../assets/images/InstagramLogo.svg');
        this.facebookSymbol = new ImageControl('../assets/images/FacebookLogo.svg');
        this.youtubeSymbol = new ImageControl('../assets/images/YoutubeLogo.svg');
        this.xSymbol= new ImageControl('../assets/images/X_Logo.svg');
        this.linkedinSymbol = new ImageControl('../assets/images/LinkedinLogo.svg');
        this.loginCTA.customCssClass = 'templateButtonColor';
        this.getLanguage();
        this.declarePasswordCSS();
    }

    getLanguage(){
        this.language.dropdownListItems=[
            {code:'en', value:'EN'},
            {code:'ru', value:'RU'}
        ]
    }

    declarePasswordCSS(){
        this.password.type='password';
        this.password.suffixLink='LABELS.FORGOTPASSWORD';
        this.password.suffixlinkClass = 'password-suffix'
    }
    forgotPasswordPopup(forgotLib: ForgotPassword){
        forgotLib.isinputDetailsShow= true;
        forgotLib.isOtpDetails = false;
        forgotLib.isNewPassword = false;
        forgotLib.crossBtn= new ImageControl('../assets/images/Close-Button-icon.svg','cross','','','','cross-btn');
        forgotLib.companyLogo = new ImageControl('../assets/images/SKYDECOR-Logo-latest.svg','company-logo','','','','company-logo');
        forgotLib.passwordLock = new ImageControl('../assets/images/Forgot-password-img.png','password-lock','','','','password-lock');
        forgotLib.emailInput = new InputControl('forgot-email','LABELS.USERID', true,'');
        forgotLib.emailInput.cssClass='forgot-email-input';
        forgotLib.forgotTitle = new StaticLabelControl('forgot-Title', "LABELS.FORGOTPASSWORDPOPUP",'forgot-CSS');
        forgotLib.forgotHint = new StaticLabelControl('Forgot-Hint','LABELS.FORGOTHINT','forgot-hint');
        forgotLib.emailMobile = new StaticLabelControl('forgot-emailTitle', "LABELS.USERID",'forgot-emailTitle');
        forgotLib.nextBtn = new Button('LABELS.NEXT','forgot-next', false,false);
        forgotLib.nextBtn.customCssClass = 'forgot-next';
        return forgotLib;
    }
    
    emailOtp(forgotLib:ForgotPassword){
        forgotLib.isinputDetailsShow= false;
        forgotLib.isNewPassword = false;
        forgotLib.isOtpDetails = true;
        forgotLib.backbutton = new ImageControl('../assets/images/Go-Back.svg','back','', 'LABELS.OTPEMAILBACKBTN','','forgot-back-btn');
        if(forgotLib.emailInput.value != '' && forgotLib.emailInput.value.indexOf('@')>-1){
            forgotLib.backText = new StaticLabelControl('backText','', 'back-text','LABELS.OTPEMAILBACKBTN');
        } else {//if(forgotLib.emailInput.value != '') {
            forgotLib.backText = new StaticLabelControl('backText','', 'back-text','LABELS.OTPMOBILEBACKBTN');
        }
        forgotLib.otpTitle = new StaticLabelControl('OtpTitle','LABELS.OTPTITLE','otp-title');
        forgotLib.otpHint = new DynamicLabelControl('hint','LABELS.OTPHINT_FormatText','otp-hint',['{{email_mobile}}'],[forgotLib.emailInput.value]);
        forgotLib.otpHint.isInnerHtml= true;
        forgotLib.otpHint.dynamicData['email_mobile'] = forgotLib.emailInput.value;
        forgotLib.otpHint.replacePlaceholder(`LABELS.OTPHINT_FormatText`);

        forgotLib.resendLink = new Link('',"LABELS.RESENDLINK");
        forgotLib.otpNextBtn = new Button('LABELS.NEXT');
        forgotLib.resendText = new StaticLabelControl('resend-Text', 'LABELS.RESENDTEXT','resend-text');
        forgotLib.resendLink = new Link('','LABELS.RESEND','LABELS.RESENDLINK')
        return forgotLib;
    }

    resetPassword(forgotLib:ForgotPassword){
        forgotLib.isinputDetailsShow= false;
        forgotLib.isOtpDetails = false;
        forgotLib.isNewPassword = true;
        // forgotLib.backbutton = new ImageControl('../assets/images/Go-Back.svg','back','', 'LABELS.OTPEMAILBACKBTN','','forgot-back-btn');
        forgotLib.resetTitle= new StaticLabelControl('','LABELS.RESETTITLE','reset-title');
        forgotLib.resetHint= new StaticLabelControl('','LABELS.RESETHINT','reset-hint');
        forgotLib.newPassword= new StaticLabelControl('','LABELS.NEWPASSWORD','reset-newPassword');
        forgotLib.confirmPassword= new StaticLabelControl('','LABELS.CONFIRMPASSWORD','reset-confirmPassword');
        forgotLib.newPwd = new InputControl('','LABELS.ENTERPASSWORD',true,'password');
        forgotLib.resetPwd = new InputControl('','LABELS.ENTERPASSWORDAGAIN',true,'password');
        forgotLib.resetPassword = new Button('LABELS.RESETPASSWORD')
        return forgotLib;
    }
}