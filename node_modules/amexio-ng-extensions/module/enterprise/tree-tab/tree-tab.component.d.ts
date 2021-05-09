import { AfterViewInit, ElementRef, OnInit } from '@angular/core';
export declare class TreeTabComponent implements OnInit, AfterViewInit {
    data: any;
    dataReader: string;
    tab: ElementRef;
    nodeClick: any;
    onLoad: any;
    width: string;
    httpUrl: string;
    httpMethod: string;
    emitData: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    addtab(event: any): void;
}
