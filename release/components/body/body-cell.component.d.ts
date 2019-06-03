import { ChangeDetectorRef, EventEmitter, ElementRef, ViewContainerRef, OnDestroy, DoCheck, Renderer2 } from '@angular/core';
import { SortDirection, TableActivateEvent } from '../../types';
import { TableColumn } from '../../types/table-column.type';
import { ActivateHelperService } from '../../services';
export declare type TreeStatus = 'collapsed' | 'expanded' | 'loading' | 'disabled';
export declare class DataTableBodyCellComponent implements DoCheck, OnDestroy {
    private cd;
    private activateEventHelper;
    private renderer;
    displayCheck: (row: any, column?: TableColumn, value?: any) => boolean;
    group: any;
    rowHeight: number;
    isSelected: boolean;
    expanded: boolean;
    rowIndex: number;
    column: TableColumn;
    row: any;
    sorts: any[];
    treeStatus: TreeStatus;
    activate: EventEmitter<TableActivateEvent>;
    treeAction: EventEmitter<any>;
    cellTemplate: ViewContainerRef;
    readonly columnCssClasses: any;
    readonly width: number;
    readonly minWidth: number;
    readonly maxWidth: number;
    readonly height: string | number;
    sanitizedValue: any;
    value: any;
    sortDir: SortDirection;
    isFocused: boolean;
    onCheckboxChangeFn: any;
    activateFn: any;
    cellContext: any;
    private _isSelected;
    private _sorts;
    private _column;
    private _row;
    private _group;
    private _rowHeight;
    private _rowIndex;
    private _expanded;
    private _element;
    private _treeStatus;
    private _listeners;
    constructor(element: ElementRef, cd: ChangeDetectorRef, activateEventHelper: ActivateHelperService, renderer: Renderer2);
    ngDoCheck(): void;
    ngOnDestroy(): void;
    checkValueUpdates(): void;
    onFocus(): void;
    onBlur(): void;
    onCheckboxChange(event: Event): void;
    calcSortDir(sorts: any[]): any;
    stripHtml(html: string): string;
    onTreeAction(): void;
    calcLeftMargin(column: any, row: any): number;
    private registerEvents;
}
