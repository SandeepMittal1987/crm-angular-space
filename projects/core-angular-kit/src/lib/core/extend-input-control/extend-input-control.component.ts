import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { TranslateService } from '@ngx-translate/core';
import { ExtendInputControl } from '../../models/core/extend-input-control';

@Component({
  selector: 'lib-extend-input-control',
  templateUrl: './extend-input-control.component.html',
  styleUrls: ['./extend-input-control.component.scss']
})
export class ExtendInputControlComponent implements AfterViewInit {
@Input() lib: ExtendInputControl;
@Output() customValidator = new EventEmitter();
@Output() customValidatorOnKeyUp = new EventEmitter();
@Output() customSuffixClick = new EventEmitter();
@ViewChild('formVal') formVal: MatFormField;
@Output() countryCodeMouseEventValidation = new EventEmitter();

tempEventKey: any;
tempEventKeyCode: any;
tempEventKeyWhich: any;
tempEventCode: any;
tempEventType: any;

  constructor( private translate: TranslateService ) { }

  ngAfterViewInit(): void {
    this.addHoverEventForFormFlex();
  }

  addHoverEventForFormFlex(){
    let val = document.getElementsByClassName('mat-form-field-flex');
    if(val){
      const x = this.countryCodeMouseEventValidation;
      const transVal = this.translate;
      Array.from(val).forEach(function(item: any){
        item.addEventListener("mouseenter", event =>{
          if(event) x.emit(true);
        })
        item.addEventListener("mouseleave", event => {
          if(event) x.emit(false);
        })
      })
    }
  }

  doValidation(){
    if(this.customValidatorOnKeyUp.observers.length > 0){
      this.lib.doPatternValidation();
      this.customValidator.emit();
    }
  }

  suffixClick(event){
    if(this.customSuffixClick.observers.length>0){
      this.customSuffixClick.emit(event);
    }
  }

  doValidationOnKeyup(){
    if(this.customValidator.observers.length>0){
      this.lib.doPatternValidation();
      this.customValidatorOnKeyUp.emit(this.lib);
    }
  }

  restrictInvalidCharInput(event){
    this.lib.removeInvalidCharOnInput(event);
  }

  onCopyPaste(event){
    let isValid
    if(event.clipboardData && event.clipboardData && event.clipboardData.getData('text/plain')){
      isValid= this.lib.isValidInputKey(event.keyCode, event.clipboardData.getData('text/plain'));
    } else if(window['clipboardData'] && window["clipboardData"].getData && window["clipboardData"].getData('Text')){
      isValid = this.lib.isValidInputKey(event.keyCode, window["clipboardData"].getData('Text'));
    }
    return isValid;
  }

  floatingLblValidation(){
    setTimeout(() => {
      this.formVal._refreshOutlineNotchWidth();
    }, 300);
  }

}
