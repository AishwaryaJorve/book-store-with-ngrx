/**
 * Created by pratik on 27/12/17.
 */
import { OnInit } from '@angular/core';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class AmexioProgressBarComponent extends LifeCycleBaseComponent implements OnInit {
    showProgress: boolean;
    infinite: boolean;
    type: string;
    amexiocolor: string;
    currentvalue: string;
    label: any;
    height: any;
    stripped: boolean;
    multi: boolean;
    tooltip: string;
    progressclass: string;
    private strippedCss;
    constructor();
    ngOnInit(): void;
}
