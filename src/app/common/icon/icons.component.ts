/* tslint:disable:variable-name */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'aru-icons',
    template: `
        <div style="border: 1px solid red; width: 100%; min-height: 200px;">
            <aru-icon-currency-eur colored="{{true}}"></aru-icon-currency-eur>
            <aru-icon-bank-2449></aru-icon-bank-2449>
            <aru-icon-bank-2449 colored="{{true}}"></aru-icon-bank-2449>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Icons {}
