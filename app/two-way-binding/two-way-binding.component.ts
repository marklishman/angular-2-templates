import {Component} from '@angular/core';

@Component({
    selector: 'two-way-binding',
    templateUrl: 'app/two-way-binding/two-way-binding.html',
    styles: [`h1 {color: SeaGreen;}`]
})
export class TwoWayBindingComponent {
    private name: string = '';
}