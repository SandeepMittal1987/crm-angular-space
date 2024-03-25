import { IBaseComponent } from "../interfaces/IBaseComponent.interface";

export class StaticLabelControl implements IBaseComponent {
    value: any;
    isSafeHtml = false;
    constructor(public controlId: string = '', public label: string = '', public cssClass = '', public innerHtml = ''){
        
    }
}
