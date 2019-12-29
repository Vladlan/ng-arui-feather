import {Component, Input, NgModule, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../../icon.component';

@Component({
    selector: 'aru-icon-bank-2449',
    styleUrls: ['./bank-2449.component.scss'],
    template: `
        <aru-icon name="bank-2449"
                  colored="{{colored}}"
                  size="{{size}}"
        ></aru-icon>
    `,
    encapsulation: ViewEncapsulation.None
})
export class IconBank2449 {
    @Input() colored: boolean;
    @Input() size: string;
}
@NgModule({
    imports: [CommonModule, IconModule],
    exports: [IconBank2449],
    declarations: [IconBank2449]
})
export class IconBank2449Module {
}
