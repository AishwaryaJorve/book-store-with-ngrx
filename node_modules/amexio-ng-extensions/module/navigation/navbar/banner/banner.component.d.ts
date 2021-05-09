import { AfterContentInit, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { DeviceQueryService } from '../../../services/device/device.query.service';
export declare class AmexioBannerComponent implements AfterContentInit, OnInit {
    private document;
    private renderer;
    private el;
    matchMediaService: DeviceQueryService;
    closeable: boolean;
    showBanner: boolean;
    interval: number;
    title: string;
    icon: string;
    hideBanner: EventEmitter<{}>;
    alignment: string;
    closeOnScroll: boolean;
    amexioComponentId: string;
    mobileMode: boolean;
    constructor(document: any, renderer: Renderer2, el: ElementRef, matchMediaService: DeviceQueryService);
    onWindowScroll(): void;
    callWindowScroll(): void;
    ngOnInit(): void;
    ngAfterContentInit(): void;
    onCloseCommon(): void;
    onCloseClick(): void;
    setColorPalette(themeClass: any): void;
    resize(event: any): void;
    responsiveMethod(): void;
    onShowClick(): void;
}
