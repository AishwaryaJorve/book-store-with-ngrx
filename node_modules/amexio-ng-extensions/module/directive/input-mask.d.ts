import { NgControl, NgModel } from '@angular/forms';
export declare class AmexioInputPatternDirective {
    model: NgModel;
    ngControl: NgControl;
    inputPattern: string;
    isInt: any;
    isLetter: any;
    matchesNumber: any;
    matchesLetter: any;
    newValue1: any;
    constructor(model: NgModel, ngControl: NgControl);
    onModelChange(event: any): void;
    handleCurrentValue(strippedValue: any, placeholder: any, isCharsetPresent: any, e: any): any;
    getOperatingValues(isCharsetPresent: any, strippedValue: any, placeholder: any): string;
    valueInitialize(strippedValue: any, placeholder: any): void;
    validateProgress(e: any, value: any): any;
}
