import { OnInit } from '@angular/core';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class DataPointsComponent extends LifeCycleBaseComponent implements OnInit {
    north: boolean;
    south: boolean;
    west: boolean;
    center: boolean;
    east: boolean;
    backgroundcolor: string;
    fontcolor: string;
    amexiocolor: '';
    colspan: number;
    dpClass: 'datapoint';
    constructor();
    ngOnInit(): void;
}
