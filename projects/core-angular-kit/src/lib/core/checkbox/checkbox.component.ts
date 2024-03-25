import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CheckboxControl } from '../../models/core/checkbox-control';

@Component({
  selector: 'lib-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() lib: CheckboxControl;
  @Output() changedCheckBoxSelected = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onChange(e: any){
    this.lib.isChecked = e.checked;
    this.changedCheckBoxSelected.emit(e);
  }

}
