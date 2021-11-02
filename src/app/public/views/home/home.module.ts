import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HomeViewComponent } from "./home.component";
import { ButtonModule } from '../../../shared/button/button.module';



@NgModule({
    imports: [BrowserModule, ButtonModule ],
    providers: [],
    declarations: [
        HomeViewComponent
    ],
    exports: [
        HomeViewComponent
    ],
})

export class HomeViewModule{}