import {Component, Input, NgModule, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../../icon.component';

@Component({
    selector: 'aru-icon-currency-eur',
    styleUrls: ['./currency-eur.component.scss'],
    template: `
        <aru-icon name="currency-eur"
                  colored="{{colored}}"
                  size="{{size}}"
        ></aru-icon>
    `,
    encapsulation: ViewEncapsulation.None
})
export class IconCurrencyEur {
    @Input() colored: boolean;
    @Input() size: string;
}
@NgModule({
    imports: [CommonModule, IconModule],
    exports: [IconCurrencyEur],
    declarations: [IconCurrencyEur]
})
export class IconCurrencyEurModule {
}
