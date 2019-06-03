import { InjectionToken } from '@angular/core';
import { TableColumn } from './table-column.type';
export declare const NGX_DATATABLE_ACTIVATE_EVENTS: InjectionToken<TableActivateEventType[]>;
export declare type TableActivateEventType = 'keydown' | 'mouseenter' | 'click' | 'dblclick' | 'checkbox';
export interface TableActivateEvent {
    type: TableActivateEventType;
    event: MouseEvent | KeyboardEvent | Event;
    row: any;
    rowElement?: HTMLElement;
    cellIndex?: number;
    group?: any;
    rowHeight?: number;
    column?: TableColumn;
    value?: any;
    cellElement?: HTMLElement;
}
