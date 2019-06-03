"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var types_1 = require("../types");
var i0 = require("@angular/core");
var i1 = require("./index");
var i2 = require("../types/index");
/**
 *   Manages activate events
 */
var ActivateHelperService = /** @class */ (function () {
    function ActivateHelperService(_allowedEvents) {
        this._allowedEvents = _allowedEvents;
    }
    ActivateHelperService.prototype.isAllowed = function (eventName) {
        return this._allowedEvents.indexOf(eventName) >= 0;
    };
    ActivateHelperService.ngInjectableDef = i0.defineInjectable({ factory: function ActivateHelperService_Factory() { return new i1.ActivateHelperService(i0.inject(i2.NGX_DATATABLE_ACTIVATE_EVENTS)); }, token: i1.ActivateHelperService, providedIn: "root" });
    ActivateHelperService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __param(0, core_1.Inject(types_1.NGX_DATATABLE_ACTIVATE_EVENTS)),
        __metadata("design:paramtypes", [Array])
    ], ActivateHelperService);
    return ActivateHelperService;
}());
exports.ActivateHelperService = ActivateHelperService;
//# sourceMappingURL=activate-helper.service.js.map