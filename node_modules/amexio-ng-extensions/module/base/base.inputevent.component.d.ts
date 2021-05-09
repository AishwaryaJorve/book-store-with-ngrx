import { ValueAccessorBaseComponent } from './value-accessor';
export declare class BaseInputEventComponent extends ValueAccessorBaseComponent<string> {
    showToolTip: boolean;
    isValid: boolean;
    emailpattern: any;
    allowblank: boolean;
    minlength: number;
    minvalue: any;
    maxvalue: any;
    onBlur: any;
    input: any;
    focus: any;
    change: any;
    constructor();
    onBlurEvent(): void;
    onFocusEvent(event: any): void;
    onInputEvent(event: any): void;
    onChangeEvent(event: any): void;
    eventPropagationText(event: any): void;
    isFieldValid(): boolean;
    isFieldValidate(): boolean;
    onNumberInputEvent(event: any): void;
    onEmailInputEvent(event: any): void;
    isEmailFieldValid(): boolean;
}
