import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoginModel } from '../../../widgets/login.model';

@Component({
  selector: 'lib-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  @Input() lib: LoginModel;
  @Output() forgotPopup = new EventEmitter();
@Output() loginClick = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  forgotPwdPopup(event){
    this.forgotPopup.emit()
  }
  loginPageClick(ev){
    this.loginClick.emit()
  }

}
