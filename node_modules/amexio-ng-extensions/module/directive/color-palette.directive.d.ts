import { HttpClient } from '@angular/common/http';
import { OnInit, ViewContainerRef } from '@angular/core';
export declare class ColorPaletteDirective implements OnInit {
    private _viewContainerRef;
    private _httpClient;
    colorPalette: string;
    themeColor: string;
    gradient: boolean;
    hostComponent: any;
    themejson: any;
    gradientThemeJson: any;
    constructor(_viewContainerRef: ViewContainerRef, _httpClient: HttpClient);
    ngOnInit(): void;
    getBGColorStyles(hostComponent: any): void;
    getGradientStyles(hostComponent: any): void;
    randomFloat(): number;
    randomInt(min: any, max: any): number;
    getRandomNumber(length: any, min: any, max: any): number;
    randomThemeCall(): void;
    vibrantThemeCall(): void;
}
