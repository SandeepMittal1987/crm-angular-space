import { IBaseComponent } from "../interfaces/IBaseComponent.interface";
import { IdisplayControl } from "../interfaces/idisplay-control.interface";
import { ImageControl } from "./image-control";
import { StaticLabelControl } from "./static-label-control";

export class ButtonControl implements IBaseComponent, IdisplayControl {
    leftButtonImage !: ImageControl;
    rightButtonImage!: ImageControl;
    buttomLabel!: StaticLabelControl;
    additionalLabel: string;
    additionalCss: string;
    extraLabel!: string;
    paxTag: StaticLabelControl;
    leftupdatedButtonImage!: ImageControl;

    constructor(public controlId = '', public label='', public cssClass='', public isDisable = false, public isHide = false, public leftImageSrc: string|null = '', public rightImageSrc: string|null = '', public isSpinner = false, public value= '', public isPointer = false, private _additionalLabel = '', private _additionalLabelCss = '', public isContent = false, public leftUpdatedButtonImageSource = ''){
        this.additionalLabel = _additionalLabel;
        this.additionalCss = _additionalLabelCss;
        this.createImage();
        this.paxTag= new StaticLabelControl();

    }

    createImage(){
        if(this.leftImageSrc){
            this.leftButtonImage = new ImageControl(this.leftImageSrc,'buttonLeftImage','','','');
        }
        if(this.rightImageSrc){
            this.rightButtonImage = new ImageControl(this.rightImageSrc, 'buttonRightImage', '', '', '');
        }
        if(this.leftupdatedButtonImage){
            this.leftupdatedButtonImage = new ImageControl(this.leftUpdatedButtonImageSource,'leftupdatedButtonImage', '', '', '');
        }
    }
}
