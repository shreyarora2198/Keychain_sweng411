"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var user_1 = require("./user");
var keychain_card_1 = require("./keychain-card");
var company_1 = require("./company");
var firebase = require("nativescript-plugin-firebase");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
firebase.init().then(function () {
    console.log('Firebase initialized');
})
    .catch(function (error) { return console.error('Error:+${error}'); });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                app_routing_module_1.AppRoutingModule,
                nativescript_module_1.NativeScriptModule,
                angular_1.NativeScriptUISideDrawerModule,
                forms_1.NativeScriptFormsModule
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                nativescript_barcodescanner_1.BarcodeScanner,
                user_1.User,
                keychain_card_1.KeychainCardClass,
                company_1.Company
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0NBQWtGO0FBQ2xGLGdGQUE4RTtBQUM5RSw4REFBb0Y7QUFDcEYsb0RBQXFFO0FBRXJFLDJEQUF3RDtBQUN4RCxpREFBK0M7QUFDL0MsK0JBQThCO0FBQzlCLGlEQUFvRDtBQUNwRCxxQ0FBb0M7QUFFcEMsdURBQTBEO0FBQzFELDJFQUE2RDtBQUU3RCxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN4QyxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUUsT0FBQSxPQUFPLENBQUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQTtBQTJCL0M7SUFBQTtJQUF5QixDQUFDO0lBQWIsU0FBUztRQXZCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wscUNBQWdCO2dCQUNoQix3Q0FBa0I7Z0JBQ2xCLHdDQUE4QjtnQkFDOUIsK0JBQXVCO2FBQzFCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLDRDQUFjO2dCQUNkLFdBQUk7Z0JBQ0osaUNBQWlCO2dCQUNqQixpQkFBTzthQUNWO1NBQ0osQ0FBQztPQUNXLFNBQVMsQ0FBSTtJQUFELGdCQUFDO0NBQUEsQUFBMUIsSUFBMEI7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOZ01vZHVsZUZhY3RvcnlMb2FkZXIsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlclwiO1xuaW1wb3J0IHsgS2V5Y2hhaW5DYXJkQ2xhc3MgfSBmcm9tIFwiLi9rZXljaGFpbi1jYXJkXCI7XG5pbXBvcnQgeyBDb21wYW55IH0gZnJvbSBcIi4vY29tcGFueVwiO1xuXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKCduYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlJyk7XG5pbXBvcnQgeyBCYXJjb2RlU2Nhbm5lciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYmFyY29kZXNjYW5uZXJcIjtcblxuZmlyZWJhc2UuaW5pdCgpLnRoZW4oKCk9PntcbiAgICBjb25zb2xlLmxvZygnRmlyZWJhc2UgaW5pdGlhbGl6ZWQnKTtcbn0pXG4uY2F0Y2goZXJyb3I9PmNvbnNvbGUuZXJyb3IoJ0Vycm9yOiske2Vycm9yfScpKVxuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBib290c3RyYXA6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQmFyY29kZVNjYW5uZXIsXG4gICAgICAgIFVzZXIsXG4gICAgICAgIEtleWNoYWluQ2FyZENsYXNzLFxuICAgICAgICBDb21wYW55XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUgeyB9XG4iXX0=