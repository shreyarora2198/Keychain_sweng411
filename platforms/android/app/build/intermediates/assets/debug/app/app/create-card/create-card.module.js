"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var create_card_routing_module_1 = require("./create-card-routing.module");
var create_card_component_1 = require("./create-card.component");
var CreateCardModule = /** @class */ (function () {
    function CreateCardModule() {
    }
    CreateCardModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                create_card_routing_module_1.CreateCardRoutingModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWNhcmQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXRlLWNhcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSwyRUFBdUU7QUFDdkUsaUVBQThEO0FBYzlEO0lBQUE7SUFBZ0MsQ0FBQztJQUFwQixnQkFBZ0I7UUFaNUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsb0RBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDJDQUFtQjthQUN0QjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xyXG5cclxuaW1wb3J0IHsgQ3JlYXRlQ2FyZFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtY2FyZC1yb3V0aW5nLm1vZHVsZVwiO1xyXG5pbXBvcnQgeyBDcmVhdGVDYXJkQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXRlLWNhcmQuY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVDYXJkUm91dGluZ01vZHVsZVxyXG4gICAgXSxcclxuICAgIGRlY2xhcmF0aW9uczogW1xyXG4gICAgICAgIENyZWF0ZUNhcmRDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ3JlYXRlQ2FyZE1vZHVsZSB7IH1cclxuIl19