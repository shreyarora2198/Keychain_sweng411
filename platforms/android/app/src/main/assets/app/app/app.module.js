"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var forms_1 = require("nativescript-angular/forms");
var firebase = require("nativescript-plugin-firebase");
firebase.init().then(function () {
    console.log('Firebase initialized');
})
    .catch(function (error) { return console.error('Error:+${error}'); });
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
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
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Y7QUFDbEYsZ0ZBQThFO0FBQzlFLDhEQUFvRjtBQUVwRiwyREFBd0Q7QUFDeEQsaURBQStDO0FBQy9DLG9EQUFrRTtBQUNsRSx1REFBMEQ7QUFFMUQsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDeEMsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFFLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxFQUFoQyxDQUFnQyxDQUFDLENBQUE7QUFxQi9DO0lBQUE7SUFBeUIsQ0FBQztJQUFiLFNBQVM7UUFqQnJCLGVBQVEsQ0FBQztZQUNOLFNBQVMsRUFBRTtnQkFDUCw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHFDQUFnQjtnQkFDaEIsd0NBQWtCO2dCQUNsQix3Q0FBOEI7Z0JBQzlCLCtCQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDViw0QkFBWTthQUNmO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxTQUFTLENBQUk7SUFBRCxnQkFBQztDQUFBLEFBQTFCLElBQTBCO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTmdNb2R1bGVGYWN0b3J5TG9hZGVyLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhclwiO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIlxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZScpO1xuXG5maXJlYmFzZS5pbml0KCkudGhlbigoKT0+e1xuICAgIGNvbnNvbGUubG9nKCdGaXJlYmFzZSBpbml0aWFsaXplZCcpO1xufSlcbi5jYXRjaChlcnJvcj0+Y29uc29sZS5lcnJvcignRXJyb3I6KyR7ZXJyb3J9JykpXG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==