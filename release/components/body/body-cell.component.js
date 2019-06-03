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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var utils_1 = require("../../utils");
var types_1 = require("../../types");
var services_1 = require("../../services");
var DataTableBodyCellComponent = /** @class */ (function () {
    // tslint:disable-next-line:max-line-length
    function DataTableBodyCellComponent(element, cd, activateEventHelper, renderer) {
        this.cd = cd;
        this.activateEventHelper = activateEventHelper;
        this.renderer = renderer;
        this.activate = new core_1.EventEmitter();
        this.treeAction = new core_1.EventEmitter();
        this.isFocused = false;
        this.onCheckboxChangeFn = this.onCheckboxChange.bind(this);
        this.activateFn = this.activate.emit.bind(this.activate);
        this.cellContext = {
            onCheckboxChangeFn: this.onCheckboxChangeFn,
            activateFn: this.activateFn,
            row: this.row,
            group: this.group,
            value: this.value,
            column: this.column,
            rowHeight: this.rowHeight,
            isSelected: this.isSelected,
            rowIndex: this.rowIndex,
            treeStatus: this.treeStatus,
            onTreeAction: this.onTreeAction.bind(this),
        };
        this._listeners = [];
        this._element = element.nativeElement;
        this.registerEvents();
    }
    Object.defineProperty(DataTableBodyCellComponent.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (group) {
            this._group = group;
            this.cellContext.group = group;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowHeight", {
        get: function () {
            return this._rowHeight;
        },
        set: function (val) {
            this._rowHeight = val;
            this.cellContext.rowHeight = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        set: function (val) {
            this._isSelected = val;
            this.cellContext.isSelected = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "expanded", {
        get: function () {
            return this._expanded;
        },
        set: function (val) {
            this._expanded = val;
            this.cellContext.expanded = val;
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "rowIndex", {
        get: function () {
            return this._rowIndex;
        },
        set: function (val) {
            this._rowIndex = val;
            this.cellContext.rowIndex = val;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "column", {
        get: function () {
            return this._column;
        },
        set: function (column) {
            this._column = column;
            this.cellContext.column = column;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "row", {
        get: function () {
            return this._row;
        },
        set: function (row) {
            this._row = row;
            this.cellContext.row = row;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "sorts", {
        get: function () {
            return this._sorts;
        },
        set: function (val) {
            this._sorts = val;
            this.calcSortDir = this.calcSortDir(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "treeStatus", {
        get: function () {
            return this._treeStatus;
        },
        set: function (status) {
            if (status !== 'collapsed' &&
                status !== 'expanded' &&
                status !== 'loading' &&
                status !== 'disabled') {
                this._treeStatus = 'collapsed';
            }
            else {
                this._treeStatus = status;
            }
            this.cellContext.treeStatus = this._treeStatus;
            this.checkValueUpdates();
            this.cd.markForCheck();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "columnCssClasses", {
        get: function () {
            var cls = 'datatable-body-cell';
            if (this.column.cellClass) {
                if (typeof this.column.cellClass === 'string') {
                    cls += ' ' + this.column.cellClass;
                }
                else if (typeof this.column.cellClass === 'function') {
                    var res = this.column.cellClass({
                        row: this.row,
                        group: this.group,
                        column: this.column,
                        value: this.value,
                        rowHeight: this.rowHeight
                    });
                    if (typeof res === 'string') {
                        cls += res;
                    }
                    else if (typeof res === 'object') {
                        var keys = Object.keys(res);
                        for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                            var k = keys_1[_i];
                            if (res[k] === true)
                                cls += " " + k;
                        }
                    }
                }
            }
            if (!this.sortDir)
                cls += ' sort-active';
            if (this.isFocused)
                cls += ' active';
            if (this.sortDir === types_1.SortDirection.asc)
                cls += ' sort-asc';
            if (this.sortDir === types_1.SortDirection.desc)
                cls += ' sort-desc';
            return cls;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "width", {
        get: function () {
            return this.column.width;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "minWidth", {
        get: function () {
            return this.column.minWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "maxWidth", {
        get: function () {
            return this.column.maxWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataTableBodyCellComponent.prototype, "height", {
        get: function () {
            var height = this.rowHeight;
            if (isNaN(height))
                return height;
            return height + 'px';
        },
        enumerable: true,
        configurable: true
    });
    DataTableBodyCellComponent.prototype.ngDoCheck = function () {
        this.checkValueUpdates();
    };
    DataTableBodyCellComponent.prototype.ngOnDestroy = function () {
        if (this.cellTemplate) {
            this.cellTemplate.clear();
        }
        this._listeners.forEach(function (l) { return l(); });
    };
    DataTableBodyCellComponent.prototype.checkValueUpdates = function () {
        var value = '';
        if (!this.row || !this.column) {
            value = '';
        }
        else {
            var val = this.column.$$valueGetter(this.row, this.column.prop);
            var userPipe = this.column.pipe;
            if (userPipe) {
                value = userPipe.transform(val);
            }
            else if (value !== undefined) {
                value = val;
            }
        }
        if (this.value !== value) {
            this.value = value;
            this.cellContext.value = value;
            this.sanitizedValue = value !== null && value !== undefined ? this.stripHtml(value) : value;
            this.cd.markForCheck();
        }
    };
    DataTableBodyCellComponent.prototype.onFocus = function () {
        this.isFocused = true;
    };
    DataTableBodyCellComponent.prototype.onBlur = function () {
        this.isFocused = false;
    };
    DataTableBodyCellComponent.prototype.onCheckboxChange = function (event) {
        if (!this.activateEventHelper.isAllowed('checkbox')) {
            return;
        }
        this.activate.emit({
            type: 'checkbox',
            event: event,
            row: this.row,
            group: this.group,
            rowHeight: this.rowHeight,
            column: this.column,
            value: this.value,
            cellElement: this._element,
            treeStatus: 'collapsed'
        });
    };
    DataTableBodyCellComponent.prototype.calcSortDir = function (sorts) {
        var _this = this;
        if (!sorts)
            return;
        var sort = sorts.find(function (s) {
            return s.prop === _this.column.prop;
        });
        if (sort)
            return sort.dir;
    };
    DataTableBodyCellComponent.prototype.stripHtml = function (html) {
        if (!html.replace)
            return html;
        return html.replace(/<\/?[^>]+(>|$)/g, '');
    };
    DataTableBodyCellComponent.prototype.onTreeAction = function () {
        this.treeAction.emit(this.row);
    };
    DataTableBodyCellComponent.prototype.calcLeftMargin = function (column, row) {
        var levelIndent = column.treeLevelIndent != null ? column.treeLevelIndent : 50;
        return column.isTreeColumn ? row.level * levelIndent : 0;
    };
    DataTableBodyCellComponent.prototype.registerEvents = function () {
        var _this = this;
        var events = ['click', 'dblclick', 'keydown'];
        var _loop_1 = function (type) {
            if (!this_1.activateEventHelper.isAllowed(type)) {
                return "continue";
            }
            this_1._listeners.push(this_1.renderer.listen(this_1._element, type, function (event) {
                var emit = true;
                if (type === 'keydown') {
                    var keyCode = event.keyCode;
                    var isTargetCell = event.target === _this._element;
                    var isAction = keyCode === utils_1.Keys.return ||
                        keyCode === utils_1.Keys.down ||
                        keyCode === utils_1.Keys.up ||
                        keyCode === utils_1.Keys.left ||
                        keyCode === utils_1.Keys.right;
                    emit = isAction && isTargetCell;
                    if (emit) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                if (!emit) {
                    return;
                }
                _this.activate.emit({
                    type: type,
                    event: event,
                    row: _this.row,
                    group: _this.group,
                    rowHeight: _this.rowHeight,
                    column: _this.column,
                    value: _this.value,
                    cellElement: _this._element
                });
            }));
        };
        var this_1 = this;
        for (var _i = 0, events_1 = events; _i < events_1.length; _i++) {
            var type = events_1[_i];
            _loop_1(type);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Function)
    ], DataTableBodyCellComponent.prototype, "displayCheck", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "group", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyCellComponent.prototype, "rowHeight", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataTableBodyCellComponent.prototype, "isSelected", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], DataTableBodyCellComponent.prototype, "expanded", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], DataTableBodyCellComponent.prototype, "rowIndex", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "column", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], DataTableBodyCellComponent.prototype, "row", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], DataTableBodyCellComponent.prototype, "sorts", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], DataTableBodyCellComponent.prototype, "treeStatus", null);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyCellComponent.prototype, "activate", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], DataTableBodyCellComponent.prototype, "treeAction", void 0);
    __decorate([
        core_1.ViewChild('cellTemplate', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], DataTableBodyCellComponent.prototype, "cellTemplate", void 0);
    __decorate([
        core_1.HostBinding('class'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "columnCssClasses", null);
    __decorate([
        core_1.HostBinding('style.width.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "width", null);
    __decorate([
        core_1.HostBinding('style.minWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "minWidth", null);
    __decorate([
        core_1.HostBinding('style.maxWidth.px'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "maxWidth", null);
    __decorate([
        core_1.HostBinding('style.height'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DataTableBodyCellComponent.prototype, "height", null);
    __decorate([
        core_1.HostListener('focus'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onFocus", null);
    __decorate([
        core_1.HostListener('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DataTableBodyCellComponent.prototype, "onBlur", null);
    DataTableBodyCellComponent = __decorate([
        core_1.Component({
            selector: 'datatable-body-cell',
            changeDetection: core_1.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"datatable-body-cell-label\"\n      [style.margin-left.px]=\"calcLeftMargin(column, row)\">\n      <label\n        *ngIf=\"column.checkboxable && (!displayCheck || displayCheck(row, column, value))\"\n        class=\"datatable-checkbox\">\n        <input\n          type=\"checkbox\"\n          [checked]=\"isSelected\"\n          (click)=\"onCheckboxChange($event)\"\n        />\n      </label>\n      <ng-container *ngIf=\"column.isTreeColumn\">\n        <button *ngIf=\"!column.treeToggleTemplate\"\n          class=\"datatable-tree-button\"\n          [disabled]=\"treeStatus==='disabled'\"\n          (click)=\"onTreeAction()\">\n          <span>\n            <i *ngIf=\"treeStatus==='loading'\"\n              class=\"icon datatable-icon-collapse\"></i>\n            <i *ngIf=\"treeStatus==='collapsed'\"\n              class=\"icon datatable-icon-up\"></i>\n            <i *ngIf=\"treeStatus==='expanded' ||\n                      treeStatus==='disabled'\"\n              class=\"icon datatable-icon-down\"></i>\n          </span>\n        </button>\n        <ng-template *ngIf=\"column.treeToggleTemplate\"\n          [ngTemplateOutlet]=\"column.treeToggleTemplate\"\n          [ngTemplateOutletContext]=\"{ cellContext: cellContext }\">\n        </ng-template>\n      </ng-container>\n\n      <span\n        *ngIf=\"!column.cellTemplate\"\n        [title]=\"sanitizedValue\"\n        [innerHTML]=\"value\">\n      </span>\n      <ng-template #cellTemplate\n        *ngIf=\"column.cellTemplate\"\n        [ngTemplateOutlet]=\"column.cellTemplate\"\n        [ngTemplateOutletContext]=\"cellContext\">\n      </ng-template>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.ChangeDetectorRef, services_1.ActivateHelperService, core_1.Renderer2])
    ], DataTableBodyCellComponent);
    return DataTableBodyCellComponent;
}());
exports.DataTableBodyCellComponent = DataTableBodyCellComponent;
//# sourceMappingURL=body-cell.component.js.map