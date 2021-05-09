import { EmbeddedViewRef, OnDestroy, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class AmexioTemplateWrapperDirective implements OnInit, OnDestroy {
    viewContainer: ViewContainerRef;
    index: number;
    templateRef: TemplateRef<any>;
    view: EmbeddedViewRef<any>;
    _item: any;
    constructor(viewContainer: ViewContainerRef);
    ngOnInit(): void;
    /*
    Properties
    name : get item
    datatype :   any
    version : 4.0 onwards
    default : none
    description : gets the carousel item
    */
    item: any;
    render(): void;
    ngOnDestroy(): void;
}
