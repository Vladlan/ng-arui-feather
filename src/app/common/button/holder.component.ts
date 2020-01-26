import {Component} from '@angular/core';

@Component({
    selector: 'holder',
    providers: [],
    template: `
        <div style="border: 1px solid gold">
            <h2> Here's the content I got </h2>
            <ng-content></ng-content>
        </div>
    `,
})
export class Holder {
    constructor() {}
}
