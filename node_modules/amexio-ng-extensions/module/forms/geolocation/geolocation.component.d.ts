import { EventEmitter, OnInit } from '@angular/core';
export declare class GeolocComponent implements OnInit {
    getlocation: EventEmitter<any>;
    onfailure: EventEmitter<any>;
    ngOnInit(): void;
    getLocation(): void;
}
