"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var signup_routing_module_1 = require("./signup-routing.module");
var signup_component_1 = require("./signup.component");
var forms_1 = require("nativescript-angular/forms");
var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                signup_routing_module_1.SignupRoutingModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                signup_component_1.SignupComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SignupModule);
    return SignupModule;
}());
exports.SignupModule = SignupModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lnbnVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNpZ251cC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFDckQsb0RBQW1FO0FBZW5FO0lBQUE7SUFBNEIsQ0FBQztJQUFoQixZQUFZO1FBYnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDJDQUFtQjtnQkFDbkIsK0JBQXVCO2FBQ3RCO1lBQ0wsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcblxyXG5pbXBvcnQgeyBTaWdudXBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vc2lnbnVwLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IFNpZ251cENvbXBvbmVudCB9IGZyb20gXCIuL3NpZ251cC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBTaWdudXBSb3V0aW5nTW9kdWxlLCBcclxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxyXG4gICAgICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBTaWdudXBDb21wb25lbnRcclxuICAgIF0sXHJcbiAgICBzY2hlbWFzOiBbXHJcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxyXG4gICAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2lnbnVwTW9kdWxlIHsgfVxyXG4iXX0=