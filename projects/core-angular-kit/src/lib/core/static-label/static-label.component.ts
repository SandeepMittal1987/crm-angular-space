import { Component, Input, OnInit } from '@angular/core';
import { StaticLabelControl } from '../../models/core/static-label-control';

@Component({
  selector: 'lib-static-label',
  templateUrl: './static-label.component.html',
  styleUrls: ['./static-label.component.scss']
})
export class StaticLabelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() lib !: StaticLabelControl;
}
