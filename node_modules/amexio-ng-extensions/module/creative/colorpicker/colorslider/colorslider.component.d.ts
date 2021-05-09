import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
import { OnChanges, OnInit, SimpleChanges } from '@angular/core';
export declare class ColorsliderComponent implements AfterViewInit, OnInit, OnChanges {
    element: ElementRef;
    canvas: ElementRef<HTMLCanvasElement>;
    color: EventEmitter<any>;
    selctedHue: any;
    offsetY: any;
    private ctx;
    mousedown: boolean;
    private selectedHeight;
    selectedcolor: string;
    emitData: any;
    constructor(element: ElementRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    draw(): void;
    onMouseDown(evt: any): void;
    onMouseMove(evt: any): void;
    onMouseUp(evt: MouseEvent): void;
    ngOnChanges(changes: SimpleChanges): void;
    emitColor(x: number, y: number): void;
    getColorAtPosition(x: number, y: number): string;
}
