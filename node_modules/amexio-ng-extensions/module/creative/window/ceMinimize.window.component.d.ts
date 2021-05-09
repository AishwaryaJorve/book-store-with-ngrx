import { OnInit } from '@angular/core';
import { MinimizeService } from '../../panes/window/minimize-service.service';
export declare class CeMinimizeWindowComponent implements OnInit {
    private _ceService1;
    arrayData: any[];
    ceMiniButton: boolean;
    constructor(_ceService1: MinimizeService);
    ngOnInit(): void;
    ceMiniBtnClick(data: any): void;
}
