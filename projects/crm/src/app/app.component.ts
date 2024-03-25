import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'crm';
  constructor(
    public translate: TranslateService,
    private router: Router,
    public dialog: MatDialog
  ){
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.setPageTitle(event.url);
      }
    })
  }

  setPageTitle(routeName: string):void{
    let tempRouteName = routeName;
    
  }

  ngOnInit(): void{
    // this.crm.header.userName = this.appConfigService.LOGIN_USER;
    this.changeLanguage('en');
    // this.authService.getAuthMetadata().subscribe(res =>{
    //   if(Object.keys(res.roles.screens).length === 0){
    //     this.UiMessage.error('UNAUTHORIZEDACCESS');
    //   }
    //   if(res.roles.screens){
    //     // this.crm.menuAuthorization(res.roles.screens);
    //     // this.setDefaultRoute();
    //   }
    // })
  }

  ngAfterViewInit(): void {
    // setTimeout(() => {
    // //  this.crm.header.isExpandMenu = false;
    //  this.toggleMenu(false); 
    // });
  }

  toggleMenu(isExpand):void{
    // this.crm.navigation.isExpand = isExpand; // need to uncomment
  }

  changeLanguage(lang:string): void{
    this.translate.setDefaultLang(lang);
    this.translate.use(lang);

    //document.getElementById('CRMPage').setAttribute('dir','ltr');

  }
}
