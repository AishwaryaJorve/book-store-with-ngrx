import { OnInit } from '@angular/core';
export declare class AmexioBoxComponent implements OnInit {
    border: string;
    borderColor: string;
    bgColor: string;
    padding: boolean;
    height: string;
    width: string;
    borderDotted: boolean;
    align: string;
    closable: boolean;
    themeCss: string;
    amexioComponentId: string;
    componentId: any;
    constructor();
    close: boolean;
    roundedgeclass: string;
    ngOnInit(): void;
    closeBox(event: any): void;
    setColorPalette(themeClass: any): void;
    setRoundEdge(type: any): void;
}
