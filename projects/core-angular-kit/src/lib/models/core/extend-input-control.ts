import { InputControl } from "./input-control";

export class ExtendInputControl extends InputControl {
    hideRequiredMarker = true;
    prefix ='';
    optionalText = '';
    suffix = '';
    readonly = false;
    prefixClass = '';
    suffixLabel = '';
    suffixClass = '';
    suffixLink = '';
    suffixlinkClass = '';
    autocomplete = 'false'
    isPrefixViewEnabled = true;
    constructor( private _controlId: string, private _label:string, private _isMandatory: boolean = false){
        super(_controlId, _label, _isMandatory)
    }
}
