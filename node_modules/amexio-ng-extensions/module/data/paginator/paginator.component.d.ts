/**
 * Created by ketangote on 11/23/17.
 */
import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PageInfo } from '../../../models/paginator.model';
import { LifeCycleBaseComponent } from '../../base/lifecycle.base.component';
export declare class AmexioPaginatorComponent extends LifeCycleBaseComponent implements OnChanges, OnInit {
    show: boolean;
    serverSidePaging: boolean;
    pages: any;
    rows: number;
    size: any;
    onRowChange: EventEmitter<any>;
    onPageChange: EventEmitter<any>;
    fullPageSet: any[];
    activePages: any[];
    activePageIndex: any;
    activePage: number;
    pageIndex: any[];
    currentRow: number;
    currentRowIndex: number;
    componentId: string;
    currentState: PageInfo;
    futureState: PageInfo;
    cloneRow: number;
    isCustomLogic: boolean;
    dummyRowData: any;
    constructor();
    ngOnInit(): void;
    createCompId(inputType: any, name: any): string;
    ngOnChanges(change: SimpleChanges): void;
    initializePages(): void;
    onFirstClick(): void;
    onLastClick(): void;
    onPrevious(): void;
    onNext(): void;
    setNextOrPreviewsPage(index: number): void;
    changeRows(rowNumber: number, inDx: number, event: any): void;
    private getCurrentRow;
    private onPageChangeMethod;
    onPageClick(page: number, index: number): void;
    calculateRows(): void;
    setRows(rowNumber: number): void;
    showColumnOptions(): void;
    setAndEmitPageState(currentPageIndex: number, futurePageIndex: number): void;
    createOnPageEmitObject(activePage: number): any;
    resetData(): void;
}
