import { Component } from "@angular/core";

import {LoginComponent} from "./components/loginCmpt";

@Component({
    selector: 'navigation-test',
    template: `
        <StackLayout>
            <page-router-outlet></page-router-outlet>
        </StackLayout>
    `
})
export class AppComponent {
}

