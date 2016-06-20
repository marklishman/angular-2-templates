import {Component} from '@angular/core';

@Component({
    selector: 'interpolation',
    template: `
        <h1>{{heading}}</h1>
        <p>
            Name: {{person.sex === 'm' ? 'Mr' : 'Ms'}}
                  {{person.name.first + ' ' + person.name.surname}}
        </p>
        <p>
            City: {{person.address?.city}}
        </p>
        <p>
            Date of Birth: {{dob('-')}}
        </p>
        <p title="Rating: {{person.rating}}/100">
            Rating: <span [innerHtml]="stars"></span>
        </p>`
})
export class InterpolationComponent {

    private heading = 'Person Details';
    private person = {
        name: { first: 'John', surname: 'Doe' },
        dob: new Date(1978, 11, 17),
        sex: 'm',
        rating: 79
    }

    private dob(separator: string = '/'): string {
        let dob = this.person.dob;
        return dob.getDate() + separator + dob.getMonth() + separator + dob.getFullYear()
    }

    private get stars(): string {
        return '&#10032;'.repeat(this.person.rating / 20);
    }
}