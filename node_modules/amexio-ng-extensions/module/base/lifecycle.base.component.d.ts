import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/index';
export declare class LifeCycleBaseComponent implements OnDestroy, OnInit, AfterViewInit {
    document?: any;
    enableLifeCycleEvents: string;
    initiated: any;
    ready: any;
    minimizeWindow2: any;
    destroy: any;
    yesFullScreen: boolean;
    roundedgeclass: string;
    fullscreenMax: boolean;
    desktopFlag: boolean;
    elem: any;
    instance: any;
    maximizeBehaiourCe1: BehaviorSubject<boolean>;
    constructor(document?: any);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    lifeCycleInit(): void;
    lifeCycleAfterViewInit(): void;
    lifeCycleDestroy(): void;
    setRoundEdge(type: any): void;
    setFullScreen(type: any): void;
    maxScreenChange(event: any): boolean;
    minScreenChange(event: any): boolean;
    exitHandler(): void;
}
