export interface IInputComponent {
    isMandatory: boolean;
    isValid: boolean;
    regexp: string;
    tooltipMsg: string;
    maxLength: number;
    type: string;
    regexErrorMsg: string;
    isValidInput(): boolean;
    focus(): void;
    doPatternValidation(): void;
}
