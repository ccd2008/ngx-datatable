import { TableActivateEventType } from '../types';
/**
 *   Manages activate events
 */
export declare class ActivateHelperService {
    private _allowedEvents;
    constructor(_allowedEvents: TableActivateEventType[]);
    isAllowed(eventName: TableActivateEventType): boolean;
}
