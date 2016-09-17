import { Component } from "@angular/core";

@Component({
    selector: 'app',
    template: `
        <inline-template></inline-template>
        <hr/>
        <external-template></external-template>
        <hr/>
        <external-relative></external-relative>`
})
export class AppComponent {}