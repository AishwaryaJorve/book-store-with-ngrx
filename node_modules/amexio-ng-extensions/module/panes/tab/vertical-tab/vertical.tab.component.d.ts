import { AfterContentInit, AfterViewInit, ComponentFactoryResolver, ElementRef, OnInit, QueryList, Renderer2 } from '@angular/core';
import { AmexioTabPillComponent } from '../tab.pill.component';
import { BaseTabComponent } from './../base.tab.component';
export declare class AmexioVerticalTabComponent extends BaseTabComponent implements AfterContentInit, AfterViewInit, OnInit {
    render: Renderer2;
    componentFactoryResolver: ComponentFactoryResolver;
    tabs: ElementRef;
    queryTabs: QueryList<AmexioTabPillComponent>;
    target: any;
    tabId: ElementRef;
    icon: ElementRef;
    closable: boolean;
    tabPosition: string;
    rotate: boolean;
    tabCollection: AmexioTabPillComponent[];
    componentId: string;
    height: number;
    rotatedtabsHeight: string;
    iconCount: number;
    constructor(render: Renderer2, componentFactoryResolver: ComponentFactoryResolver);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    closeAllTabs(): void;
    tabDomRemove(tab: any): void;
    activateTab(tabId: number): void;
}
