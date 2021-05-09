import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
export declare class ColorPaletteComponent implements AfterViewInit, OnChanges {
    hue: string;
    position: any;
    color: EventEmitter<string>;
    canvas: ElementRef<HTMLCanvasElement>;
    width: any;
    height: any;
    private ctx;
    private mousedown;
    emitData: any;
    selectedPosition: {
        x: number;
        y: number;
    };
    constructor();
    ngAfterViewInit(): void;
    draw(): void;
    ngOnChanges(changes: SimpleChanges): void;
    onMouseUp(evt: MouseEvent): void;
    onMouseDown(evt: MouseEvent): void;
    onMouseMove(evt: MouseEvent): void;
    emitColor(x: number, y: number): void;
    getColorAtPosition(x: number, y: number): string;
}
