import { Icore } from '../models/interfaces/icore';
import { IDropDownItem } from '../models/interfaces/idrop-down-item';

export class Header implements Icore {
  width = '';
  isHide = false;
  userName = '';
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

  constructor(
    public id: string = 'crmHeader',
    public title: string = 'LABEL.TITLE',
    public logoUrl: string = '',
    public languages: string[] = ['en']
  ) {}

}
