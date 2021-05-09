import { AfterContentChecked, OnInit, ViewContainerRef } from '@angular/core';
export declare class DynamicTextDirective implements OnInit, AfterContentChecked {
    private viewContainerRef;
    jsonData: any;
    constructor(viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
    ngAfterContentChecked(): void;
    iterateHTMLDOM(element: any): void;
}
