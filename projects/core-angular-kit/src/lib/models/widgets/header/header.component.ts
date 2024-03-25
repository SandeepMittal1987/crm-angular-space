import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Header } from '../../../widgets/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
@Input() lib: Header;
@Output() actionOnMenuClick = new EventEmitter();
@Output() actionOnLogoutClick = new EventEmitter();
@Output() actionOnLanguageClick = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onMenuClick(event: any): void{
    this.lib.isExpandMenu= !this.lib.isExpandMenu;
    if(this.actionOnMenuClick.observers.length >0){
      this.actionOnMenuClick.emit(this.lib.isExpandMenu);
    }
  }
  onLogoutClick(event:any): void{
    if(this.actionOnLogoutClick.observers.length >0){
      this.actionOnLogoutClick.emit(event);
    }
  }

  onLanguageSelect(lang:string): void{
    if(this.actionOnLanguageClick.observers.length>0){
      this.lib.currentLanguage = lang;
      this.actionOnLanguageClick.emit(lang)
    }
  }

}
