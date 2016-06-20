import {Component} from '@angular/core';
import {TwoWayBindingComponent} from "./two-way-binding/two-way-binding.component";
import {InlineTemplateComponent} from "./templates/inline-template.component";
import {ExternalTemplateComponent} from "./templates/external-template.component";
import {InterpolationComponent} from "./interpolation/interpolation.component";
import {ExternalRelativeComponent} from "./templates/external-relative.component";

@Component({
    selector: 'templates-demo',
    template: `
        <inline-template></inline-template>
        <hr/>
        <external-template></external-template>
        <hr/>
        <external-relative></external-relative>
        <hr/>
        <interpolation></interpolation>
        <hr/>
        <two-way-binding></two-way-binding>
        `,
    directives: [
        InlineTemplateComponent,
        ExternalTemplateComponent,
        ExternalRelativeComponent,
        InterpolationComponent,
        TwoWayBindingComponent
    ]
})
export class TemplatesDemoComponent {}