import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputControl } from '../../models/core/input-control';

@Component({
  selector: 'lib-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent implements OnInit {
@Input() lib!: InputControl;
@Output() customValidator = new EventEmitter();
@Output() focused = new EventEmitter();
@Output() customValidatorOnKeyUp = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  doValidation(){
    this.lib.doPatternValidation();
    if(this.customValidator.observers.length>0){
      this.customValidator.emit();
    }
  }

  onFocus(event){
    this.focused.emit(event);
  }

  doValidationOnKeyup(){
    if(this.customValidatorOnKeyUp.observers.length>0){
      this.lib.doPatternValidation();
      this.customValidatorOnKeyUp.emit();
    }
  }

  restrictInvalidCharInput(event: any){
    this.lib.removeInvalidCharOnInput(event);
  }

  onCopyPaste(event:any){
    let isValid
    if(event.clipboardData && event.clipboardData.getData('text/plain')){
      isValid= this.lib.isValidInputKey(event.keyCode, event.clipboardData.getData('text/plain'));
    } else if(window["ClipboardData"] && window["clipboardData"].getData && window["clipboardData"].getData('Text')){
      isValid= this.lib.isValidInputKey(event.keyCode, window['clipboarData'].getData('Text'));
    }
    return isValid;
  }

}
