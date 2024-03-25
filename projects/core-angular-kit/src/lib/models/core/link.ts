import { Icore } from "../interfaces/icore";

export class Link implements Icore {
    width='';
    matIconClass = "material-icons action-icons";
    constructor(
        public matIcon: string='',
        public tooltipText: string= '',
        public title: string='',
        public id: string ='',
        public isDisable: boolean = false,
        public isHide: boolean = false
    ){

    }

}
