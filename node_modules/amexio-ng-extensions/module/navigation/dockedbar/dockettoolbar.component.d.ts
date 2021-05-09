import { AfterContentInit, OnInit, QueryList } from '@angular/core';
import { DockbarComponent } from './dockbaritem';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class DockedBarToolComponent extends LifeCycleBaseComponent implements AfterContentInit, OnInit {
    dockbars: QueryList<DockbarComponent>;
    dockbarArray: DockbarComponent[];
    height: string;
    constructor();
    onClick(event: any): void;
    ngAfterContentInit(): void;
    ngOnInit(): void;
}
