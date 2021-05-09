import { OnInit, ViewContainerRef } from '@angular/core';
export declare class AmexioFullScreenDirective implements OnInit {
    private _viewContainerRef;
    hostComponent: any;
    fullScreenType: string;
    constructor(_viewContainerRef: ViewContainerRef);
    ngOnInit(): void;
}
