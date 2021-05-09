import { OnInit } from '@angular/core';
export declare class DarkmodeComponent implements OnInit {
    fieldLabel: string;
    shape: string;
    type: number;
    size: string;
    mode: string;
    colorData: any;
    stepVal: number;
    maxValue: number;
    sepiaColorCode: string;
    sepiaFontColor: string;
    themesdata: any;
    themeStyles: any[];
    appBackground: string;
    appForeground: string;
    componentBackground: string;
    componentForeground: string;
    constructor();
    ngOnInit(): void;
    onToggleClick(event: any): void;
    onChange(eventV: any): void;
    sepiaMode(): void;
    otherMode(): void;
    insertStyleSheetRule(ruleText: any): void;
    addDynamicCss(circleColor: any, borderColor: any): void;
}
