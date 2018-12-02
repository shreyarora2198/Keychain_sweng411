"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var create_card_routing_module_1 = require("./create-card-routing.module");
var create_card_component_1 = require("./create-card.component");
var CreateCardModule = /** @class */ (function () {
    function CreateCardModule() {
    }
    CreateCardModule = tslib_1.__decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                create_card_routing_module_1.CreateCardRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                create_card_component_1.CreateCardComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreateCardModule);
    return CreateCardModule;
}());
exports.CreateCardModule = CreateCardModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBRXJFLDJFQUF1RTtBQUN2RSxpRUFBOEQ7QUFlOUQ7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQWI1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QixvREFBdUI7Z0JBQ3ZCLCtCQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViwyQ0FBbUI7YUFDdEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmltcG9ydCB7IENyZWF0ZUNhcmRSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vY3JlYXRlLWNhcmQtcm91dGluZy5tb2R1bGVcIjtcclxuaW1wb3J0IHsgQ3JlYXRlQ2FyZENvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1jYXJkLmNvbXBvbmVudFwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgQ3JlYXRlQ2FyZFJvdXRpbmdNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBDcmVhdGVDYXJkQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZUNhcmRNb2R1bGUgeyB9XHJcbiJdfQ==