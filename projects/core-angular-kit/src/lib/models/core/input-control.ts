import { APP_CONSTANTS } from '../Constants/app-constants';
import { IBaseComponent } from '../interfaces/IBaseComponent.interface';
import { IdisplayControl } from '../interfaces/idisplay-control.interface';
import { IInputComponent } from '../interfaces/iinput-component.interface';

export class InputControl
  implements IInputComponent, IBaseComponent, IdisplayControl
{
  oldValue = '';
  isGroupErrorMsg = false;
  isValid = true;
  isConditionalError = false;
  tooltipMsg = '';
  isRestrictInvalidCharOnInput = true;
  keyUpRegex = '';
  public placeholder = '';
  isHintEnabled = false;
  isNoerror = false;
  actualVal = '';
  regObj?: string | RegExp;
  spaceRegex = false;
  constructor(
    public controlId: string,
    public label: string,
    public isMandatory: boolean,
    public type = 'text',
    public maxLength = 100,
    public regexp = '',
    public regexErrorMsg = '',
    public value = '',
    public cssClass = '',
    public isHide = false,
    public isDisable = false,
    public minLength = 0
  ) {
    this.isValid =
      this.isMandatory && !this.value && !this.isHide ? false : true;
    this.oldValue = this.value;
  }
isValidInput() {
    if(this.isMandatory=== false && !this.value){
        this.isValid = true;
        this.isConditionalError = false;
    } else {
        this.isValid =
          (this.isMandatory && !this.value && !this.isHide ? false : true) &&
          new RegExp(this.regexp).test(this.value) &&
          (this.value.length > this.maxLength ? false : true) &&
          (this.value.length < this.minLength ? false : true);
    }
    return this.isValid;
}

focus(): void {
    const ctr: HTMLElement = document.getElementById(this.controlId) as HTMLElement;
    if(ctr){
        ctr.focus();
    }
}

doPatternValidation(): void {
    if(!this.isValidInput()){
        this.tooltipMsg = this.regexErrorMsg;
    } else {
        if(this.tooltipMsg === this.regexErrorMsg && this.isValid && !this.isConditionalError){
            this.tooltipMsg= '';
        }
    }
}

isValidInputKey(keyCode: any, key:any){
    if(APP_CONSTANTS.KEY_CODE.indexOf(keyCode) === -1){
        return new RegExp(this.keyUpRegex).test(key);
    } else {
        return true;
    }
}

removeInvalidCharOnInput(event: any){
    if(this.regObj){
        if(event.target && event.target.value !== undefined && (new RegExp(this.regObj).test(event.target.value))){
            if(this.spaceRegex === true)
                event.target.value = event.target.value.trim();
            else
                event.target.value = event.target.value.trimLeft();
        } else {
            if(this.oldValue && this.oldValue == this.value){
                event.target.value = event.target.value != ""? this.oldValue : "";
                this.value = event.target.value.trim();
                this.oldValue = this.value.trim();
            } else {
                if(event.data = ' '){
                    event.target.value = event.target.value.replace(/\s+/g, ' ').trim();
                    this.oldValue= this.value.trim();
                } else {
                    event.target.value = event.target.value.replace(event.data,'').replace(/\s+/g,' ').trim();
                    this.oldValue = event.target.value.trim();
                }
            }
        }
    } else {
        if(event.data !== undefined && !(new RegExp(this.keyUpRegex).test(event.data))){
            event.target.value = event.target.value.replace(event.data,'');
            this.value = event.target.value.trim();
        } else if(event.target && event.target.value && !(new RegExp(this.keyUpRegex).test(event.target.value.trim()))){
            event.target.value = this.oldValue;
            this.value= event.target.value.trim();
        }
    }
    this.value = event.target.value.trim();
    this.oldValue = this.value.trim();
}

setConditionalError(toolTipMsg:string){
    if(toolTipMsg){
        this.isValid = false;
        this.isConditionalError = true;
        this.tooltipMsg = toolTipMsg;
    }
}

resetConditionalError(toolTipMsg:string){
    if(this.tooltipMsg=== toolTipMsg){
        this.tooltipMsg ='';
        this.isValid = true;
        this.isConditionalError = false;
    }
}

}
