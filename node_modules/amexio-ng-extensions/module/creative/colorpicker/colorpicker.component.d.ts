import { OnInit } from '@angular/core';
import { ValueAccessorBaseComponent } from '../../base/value-accessor';
export declare class ColorPickerComponent extends ValueAccessorBaseComponent<string> implements OnInit {
    selectedColor: any;
    inlineColorPicker: boolean;
    fieldlabel: string;
    hue: string;
    color: string;
    showColorPicker: boolean;
    roundedgeclass: string;
    offsetY: any;
    position: any;
    constructor();
    ngOnInit(): void;
    selectedPaletteColor(data: any): void;
    rgbToHexConvert(rgbColor: any): string;
    selectedHue(data: any): void;
    openColorPicker(): void;
    closeColorPicker(): void;
    setRoundEdge(type: any): void;
}
