import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class AmexioTaskbarItemComponent implements OnInit {
    title: string;
    widthOfItem: number;
    heightOfItem: number;
    relativePosition: boolean;
    close: boolean;
    taskbarIcon: any;
    displayFlag: boolean;
    closeIcon: any;
    left: any;
    top: any;
    iconClose: boolean;
    taskbarItemId: ElementRef;
    onCloseEvent: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    taskbarItemClick(): void;
    iconClick(event: any): void;
}
