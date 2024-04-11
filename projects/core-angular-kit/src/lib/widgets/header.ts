import { ImageControl } from '../models/core/image-control';
import { StaticLabelControl } from '../models/core/static-label-control';
import { Icore } from '../models/interfaces/icore';
import { IDropDownItem } from '../models/interfaces/idrop-down-item';

export class Header implements Icore {
  width = '';
  isHide = false;
  userName = '';
  isLoggedIn = false;
  isExpandMenu = true;
  isHideLogoWithExpandAndCollapseMenu = false;
  appTitle = 'LABLE.TITLE';
  titleSeparator = 'LABEL.TITLESEPARATOR';
  pageName = '';
  isHideLanguageOption = false;
  themeList: IDropDownItem[] = [];
  isEnableThemeChange = false;
  currentLanguage = 'en';
  menu='';
  language = 'LABEL.LANGUAGE';
  openEmail = new ImageControl('../assets/images/email-icon.svg','','','','','email-icon');
  supportCall = new ImageControl('../assets/images/PhoneCall-icon.svg','','','','','support-call');
  supportEmail = new StaticLabelControl('supportEmail','LABELS.SUPPORTEMAIL', 'email');
  supportMobile = new StaticLabelControl('supportMobile','LABELS.SUPPORTEMOBILE', 'mobile');
  companyLogo = new ImageControl('../assets/images/horizontal-logo.svg','company-Logo','','','','company-logo');
  avatarImg = new ImageControl('https://www.w3schools.com/howto/img_avatar.png','avatar','','','','avatar');
  constructor(
    public id: string = 'crmHeader',
    public title: string = 'LABEL.TITLE',
    // public languages: string[] = ['en']
    ) {
  }

}
