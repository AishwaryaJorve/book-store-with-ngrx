import { ValueAccessorBaseComponent } from './value-accessor';
export declare class BaseInput<T> extends ValueAccessorBaseComponent<T> {
    onBaseInputFocus(event: any): void;
    onBaseInput(event: any): void;
    onBlur2(event: any): void;
    onBaseInputChange(event: any): void;
    checkValidity(): void;
    validateOnInit(): boolean;
    isVali1d(): boolean;
}
