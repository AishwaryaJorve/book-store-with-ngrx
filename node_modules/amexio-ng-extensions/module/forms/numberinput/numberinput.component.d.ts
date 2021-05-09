import { OnInit } from '@angular/core';
import { FormControl, NgModel, Validators } from '@angular/forms';
import { BaseInputEventComponent } from '../../base/base.inputevent.component';
export declare class AmexioNumberInputComponent extends BaseInputEventComponent implements OnInit, Validators {
    fieldlabel: string;
    allowblank: boolean;
    regEx: RegExp;
    showToolTip: boolean;
    minerrormsg: string;
    maxerrormsg: string;
    errormsg: string;
    isValid: boolean;
    placeholder: string;
    disabled: boolean;
    onBlur: any;
    input: any;
    focus: any;
    change: any;
    iconfeedback: boolean;
    fontstyle: string;
    fontfamily: string;
    fontsize: string;
    haslabel: boolean;
    name: string;
    _pattern: string;
    /*
    Properties
    name : pattern
    datatype : string
    version : 4.0 onwards
    default :
    description : Apply Reg-ex to the field
    */
    pattern: string;
    enablepopover: boolean;
    model: NgModel;
    componentId: any;
    constructor();
    ngOnInit(): void;
    onKeyUpHome(event: any): void;
    onKeyUpEnd(event: any): void;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
}
