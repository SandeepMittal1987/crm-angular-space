import { Component, Input, OnInit } from '@angular/core';
import { Layout } from '../../../widgets/layout';

@Component({
  selector: 'lib-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.scss']
})
export class LayoutPageComponent implements OnInit {
  @Input() lib: Layout;
  constructor() { }

  ngOnInit() {
  }

}
