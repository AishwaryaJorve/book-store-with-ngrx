import { OnInit } from '@angular/core';
import { LifeCycleBaseComponent } from '../../../module/base/lifecycle.base.component';
export declare class AmexioFieldSetComponent extends LifeCycleBaseComponent implements OnInit {
    collapsible: boolean;
    expanded: boolean;
    title: string;
    isActive: boolean;
    constructor();
    ngOnInit(): void;
    onLegendClick(): void;
}
