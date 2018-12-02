"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var view_card_routing_module_1 = require("./view-card-routing.module");
var view_card_component_1 = require("./view-card.component");
var ViewCardModule = /** @class */ (function () {
    function ViewCardModule() {
    }
    ViewCardModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                view_card_routing_module_1.ViewCardRoutingModule
            ],
            declarations: [
                view_card_component_1.ViewCardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ViewCardModule);
    return ViewCardModule;
}());
exports.ViewCardModule = ViewCardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1jYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInZpZXctY2FyZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx1RUFBbUU7QUFDbkUsNkRBQTBEO0FBYzFEO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBWjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLGdEQUFxQjthQUN4QjtZQUNELFlBQVksRUFBRTtnQkFDVix1Q0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFZpZXdDYXJkUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3ZpZXctY2FyZC1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVmlld0NhcmRDb21wb25lbnQgfSBmcm9tIFwiLi92aWV3LWNhcmQuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFZpZXdDYXJkUm91dGluZ01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFZpZXdDYXJkQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdDYXJkTW9kdWxlIHsgfVxuIl19