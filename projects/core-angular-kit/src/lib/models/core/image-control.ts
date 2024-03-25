import { IBaseComponent } from "../interfaces/IBaseComponent.interface";
import { IImageControl } from "../interfaces/iImage-control";

export class ImageControl implements IImageControl, IBaseComponent {
    constructor(public src: any ='', public alt: string ='', public controlId: string ='', public label='', public value = '', public cssClass='', public backgroundImg ?: boolean){}

}
