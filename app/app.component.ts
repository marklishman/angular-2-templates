import { Component } from '@angular/core';

 import { InlineComponent } from "./templates/inline.component";
import { ExternalComponent } from "./templates/external.component";
import { RelativeComponent } from "./templates/relative.component";

@Component({
    selector: 'app',
    template: `
        <inline-template></inline-template>
        <hr/>
        <external-template></external-template>
        <hr/>
        <external-relative></external-relative>`,
    directives: [
        InlineComponent,
        ExternalComponent,
        RelativeComponent,
    ]
})
export class AppComponent {}