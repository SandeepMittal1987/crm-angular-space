export interface IDropDownItem {
    code: string;
    displayText: string;
}

export interface IColumnFilter {
    columnName?: string;
    type?: FilterType;
    filterCheck?: IDropDownItem[];
    customCssClass?: string;
}

export enum FilterType{
    INPUT_BOX = 'INPUT_BOX',
    DROPDOWN = "DROPDOWN",
    DATETIME = "DATETIME"
}
