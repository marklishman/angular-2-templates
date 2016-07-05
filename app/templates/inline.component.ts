import { Component } from '@angular/core';

@Component({
    selector: 'inline-template',
    template: `
        <h2>Inline Template</h2>
        <p>
            Multi-line inline template using back-ticks
        </p>`
})
export class InlineComponent {}