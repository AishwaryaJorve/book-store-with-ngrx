export interface IInputValidator {
    isValid(): boolean;
    checkValidity(): void;
    validateOnInit(): boolean;
}
