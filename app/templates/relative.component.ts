import { Component } from '@angular/core';

declare var module: any;

@Component({
    moduleId: module.id,
    selector: 'external-relative',
    templateUrl: './external-template.html'
})
export class RelativeComponent {}