import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { DropdownListControl } from '../../models/core/dropdown-list-control';

@Component({
  selector: 'lib-dropdown-list',
  templateUrl: './dropdown-list.component.html',
  styleUrls: ['./dropdown-list.component.scss']
})
export class DropdownListComponent implements OnDestroy {
@Input() lib: DropdownListControl;
@Output() dropdownItemSelect = new EventEmitter();
@Output() getErrorCapture = new EventEmitter();
  constructor() { }

  validateData(){
    this.lib.doPatternValidation();
    if(this.lib.tooltipMsg){
      this.getErrorCapture.emit(this.lib);
    }
  }

  selectItem(){
    this.lib.doPatternValidation();
    if(this.dropdownItemSelect.observers.length>0){
      this.dropdownItemSelect.emit(this.lib.value);
    }
  }

  ngOnDestroy() {
    this.dropdownItemSelect.unsubscribe();
  }

}
