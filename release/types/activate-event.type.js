"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var defaultEvents = [
    'keydown',
    'mouseenter',
    'click',
    'dblclick',
    'checkbox'
];
exports.NGX_DATATABLE_ACTIVATE_EVENTS = new core_1.InjectionToken('activate events types', {
    factory: function () { return defaultEvents; }
});
//# sourceMappingURL=activate-event.type.js.map