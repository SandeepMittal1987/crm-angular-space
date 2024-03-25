import { IBaseComponent } from '../interfaces/IBaseComponent.interface';
import { ICheckboxControl } from '../interfaces/iCheckbox-control.interface';

export class CheckboxControl implements ICheckboxControl, IBaseComponent {
  isDisabled = false;
  constructor(
    public isChecked: boolean,
    public controlId: string,
    public color: string,
    public label: any = '',
    public value = '',
    public cssClass = '',
    public isHide = false,
    public isInnerHtml = false
  ) {}
}
