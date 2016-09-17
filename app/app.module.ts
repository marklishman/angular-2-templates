import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { InlineComponent } from "./templates/inline.component";
import { ExternalComponent } from "./templates/external.component";
import { RelativeComponent } from "./templates/relative.component";

@NgModule({
    imports:      [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        InlineComponent,
        ExternalComponent,
        RelativeComponent,
    ],
    bootstrap:    [
        AppComponent
    ]
})
export class AppModule { }