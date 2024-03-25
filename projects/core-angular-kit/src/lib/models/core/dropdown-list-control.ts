import { InputControl } from "./input-control";

export class DropdownListItem{
    constructor(public code: string='', public value = ''){}
}
export class DropdownListControl extends InputControl {
    dropdownListItems: DropdownListItem[] =[];
    hideRequiredMarker = true;
    invalidListItemErrorMsg!: string;
    override isMandatory: any = false;
    imageSrc = '../assets/images/chevron-down.svg';
    constructor(private _controlId: string = '', private _label: string='', private _jsonSrc: { code: string; value: string;}[]=[],public appearance = 'outline', public override value = '', public showLabel = false, public override isDisable = false, public autoSelectWithLine = false, public isinfantPopup= false,
    public infantId?:string){
        super(_controlId, _label,true);
        this.setDropdownListItems(_jsonSrc);
    }

    addDropdownListItem(code:string, value: string){
        this.dropdownListItems.push(new DropdownListItem(code, value));
    }

    setDropdownListItems(jsonSrc: {code: string, value: string}[]){
        this.dropdownListItems = [];
        jsonSrc.forEach(item =>{
            this.addDropdownListItem(item.code, item.value);
        })
    }

    isValidListItem(){
        let isValidItem = false;
        const searchedItem = this.dropdownListItems.find(item=> item.value.toLowerCase() === this.value.toLowerCase());
        if(searchedItem){
            isValidItem = true;
        }
        return isValidItem;
    }

    validateListItem(){
        if(!this.isValidListItem() && this.value.toLowerCase() !== ''){
            this.tooltipMsg = this.invalidListItemErrorMsg;
            this.isValid = false;
        } else if (!this.isValidListItem() && this.value.toLowerCase() == '') {
            this.isValid = false;
        } else if (this.tooltipMsg == this.invalidListItemErrorMsg){
            this.tooltipMsg ='';
            this.isValid = true
        }
    }
}
