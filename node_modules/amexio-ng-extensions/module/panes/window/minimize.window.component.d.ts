import { ElementRef, OnInit } from '@angular/core';
import { MinimizeService } from './minimize-service.service';
export declare class MinimizeWindowComponent implements OnInit {
    private _minimizeService1;
    localData: any[];
    minimizeButton: boolean;
    input: ElementRef;
    constructor(_minimizeService1: MinimizeService);
    ngOnInit(): void;
    minimizeBtnClick(data: any): void;
}
