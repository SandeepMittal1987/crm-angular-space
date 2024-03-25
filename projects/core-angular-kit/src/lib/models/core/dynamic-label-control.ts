import { IdisplayControl } from '../interfaces/idisplay-control.interface';
import { IDynamicLabel } from '../interfaces/idynamic-label.interface';
import { StaticLabelControl } from './static-label-control';

export class DynamicLabelControl
  extends StaticLabelControl
  implements IDynamicLabel, IdisplayControl
{
  translatedValue = '';
  override value: any='';
  isInnerHtml = false;
  dynamicData: any = {};
  isHide: boolean;
  isDisable: boolean;

  constructor(
    public override controlId: string,
    public override label: string,
    public override cssClass = '',
    public placeholder: Array<string>,
    public replaceBy: Array<string>
  ) {
    super(controlId, label, cssClass);
    this.replacePlaceholder(label);
  }

  replacePlaceholder(localesText: string){
    if(this.translatedValue !== ""){
        localesText = this.translatedValue;
    }

    if(localesText){
        if(this.replaceBy.length>0){
            for(let itr=0; itr<this.placeholder.length;itr++){
                if (this.replaceBy[itr]) {
                    localesText = localesText.replace(this.placeholder[itr],this.replaceBy[itr]);
                }
            }
            this.value = localesText;
            this.label = localesText;
        } else {
            this.value ='';
        }
    } else{
        this.value = this.label;
    }
  }
}
