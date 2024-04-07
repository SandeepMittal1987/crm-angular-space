import { Component, OnInit } from '@angular/core';
import { Layout } from 'core-angular-kit';

@Component({
  selector: 'crm-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  crm: Layout;
  constructor() { }
  
  ngOnInit() {
    this.crm= new Layout();
    this.crm.header.isLoggedIn = true;
  }

}
