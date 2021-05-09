import { OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { BaseInputEventComponent } from '../../base/base.inputevent.component';
export declare class AmexioEmailInputComponent extends BaseInputEventComponent implements OnInit, Validators {
    fieldlabel: string;
    hasLabel: boolean;
    allowblank: boolean;
    model: NgModel;
    regEx: RegExp;
    showToolTip: boolean;
    placeholder: string;
    disabled: boolean;
    iconfeedback: boolean;
    fontstyle: string;
    fontfamily: string;
    fontsize: string;
    errormsg: string;
    _pattern: string;
    pattern: string;
    enablepopover: boolean;
    componentId: any;
    isValid: boolean;
    name: string;
    constructor();
    ngOnInit(): void;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
}
