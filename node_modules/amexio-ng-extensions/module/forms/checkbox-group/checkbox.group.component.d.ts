import { OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ValueAccessorBaseComponent } from '../../base/value-accessor';
import { CommonDataService } from '../../services/data/common.data.service';
export declare class AmexioCheckBoxGroupComponent extends ValueAccessorBaseComponent<any> implements OnInit, Validators {
    private httpService;
    horizontal: boolean;
    disabled: boolean;
    viewdata: any;
    _data: any;
    selectedCheckBox: any[];
    data: any;
    fieldlabel: any;
    displayfield: any;
    valuefield: any;
    required: boolean;
    name: string;
    datareader: string;
    httpmethod: string;
    httpurl: string;
    onSelection: any;
    private _model;
    componentId: string;
    SelectedCheckBox: any[];
    constructor(httpService: CommonDataService);
    ngOnInit(): void;
    getResponseData(httpResponse: any): any;
    contains(value: any): boolean;
    emitData(): void;
    validate(c: FormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
}
