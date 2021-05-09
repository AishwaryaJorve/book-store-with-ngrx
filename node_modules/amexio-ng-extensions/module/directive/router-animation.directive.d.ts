import { ElementRef, Renderer2 } from '@angular/core';
import { RouterService } from '../services/routing/routing.service';
export declare class RoutedirDirective {
    private routerInstance;
    private el;
    private renderer;
    routeAnimation: string;
    slideTop: string;
    slideBottom: string;
    slideRight: string;
    slideLeft: string;
    animationTop: string;
    animationBottom: string;
    animationLeft: string;
    animationRight: string;
    animationClasses: any[];
    constructor(routerInstance: RouterService, el: ElementRef, renderer: Renderer2);
    addBottomCss(): void;
    addTopCss(): void;
    addRightCss(): void;
    addLeftCss(): void;
    addDynamicClass(className: any): void;
    navigationMethod(event1: any): void;
}
