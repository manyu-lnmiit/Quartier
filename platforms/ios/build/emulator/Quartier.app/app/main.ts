import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes ,navigatableComponents} from "./app.routes";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/loginCmpt";
import { HomeComponent } from "./components/homeCmpt";
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [AppComponent],
    declarations: [navigatableComponents,AppComponent],
    imports: [
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        NativeScriptHttpModule
    ]
})
export class NavigationAppModule {}

platformNativeScriptDynamic().bootstrapModule(NavigationAppModule);
