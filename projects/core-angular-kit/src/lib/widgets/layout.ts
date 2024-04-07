// import { ImageControl, StaticLabelControl } from "core-angular-kit";
import { ImageControl } from "../models/core/image-control";
import { StaticLabelControl } from "../models/core/static-label-control";
import { Header } from "./header";

export class Layout {
    header= new Header()
    constructor(){
        // this.headerControls()
    }
    
    headerControls(){
        this.header.openEmail = new ImageControl('../assets/images/email-icon.svg','','','','','email-icon');
        this.header.supportCall = new ImageControl('../assets/images/PhoneCall-icon.svg','','','','','support-call');
        this.header.supportEmail = new StaticLabelControl('supportEmail','LABELS.SUPPORTEMAIL', 'email');
        this.header.supportMobile = new StaticLabelControl('supportMobile','LABELS.SUPPORTEMOBILE', 'mobile');

    }
}
