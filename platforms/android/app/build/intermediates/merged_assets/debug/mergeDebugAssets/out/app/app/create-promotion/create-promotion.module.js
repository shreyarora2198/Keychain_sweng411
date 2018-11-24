"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var create_promotion_routing_module_1 = require("./create-promotion-routing.module");
var create_promotion_component_1 = require("./create-promotion.component");
var CreatePromotionModule = /** @class */ (function () {
    function CreatePromotionModule() {
    }
    CreatePromotionModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                create_promotion_routing_module_1.CreatePromotionRoutingModule
            ],
            declarations: [
                create_promotion_component_1.CreatePromotionComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CreatePromotionModule);
    return CreatePromotionModule;
}());
exports.CreatePromotionModule = CreatePromotionModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXByb21vdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjcmVhdGUtcHJvbW90aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUscUZBQWlGO0FBQ2pGLDJFQUF3RTtBQWN4RTtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBWmpDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDhEQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDVixxREFBd0I7YUFDM0I7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLHFCQUFxQixDQUFJO0lBQUQsNEJBQUM7Q0FBQSxBQUF0QyxJQUFzQztBQUF6QixzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcclxuXHJcbmltcG9ydCB7IENyZWF0ZVByb21vdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jcmVhdGUtcHJvbW90aW9uLXJvdXRpbmcubW9kdWxlXCI7XHJcbmltcG9ydCB7IENyZWF0ZVByb21vdGlvbkNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWF0ZS1wcm9tb3Rpb24uY29tcG9uZW50XCI7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcclxuICAgICAgICBDcmVhdGVQcm9tb3Rpb25Sb3V0aW5nTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQ3JlYXRlUHJvbW90aW9uQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgc2NoZW1hczogW1xyXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENyZWF0ZVByb21vdGlvbk1vZHVsZSB7IH1cclxuIl19