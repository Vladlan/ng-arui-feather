import {Component, Input, NgModule, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'aru-icon',
    styleUrls: [
      './icon.component.scss',
      './currency/currency-eur/currency-eur.component.scss',
      './currency/bank-2449/bank-2449.component.scss'
    ],
    template: `
        <span [class]="styleClass"
              [ngStyle]="style"
              [ngClass]="{
                            'icon': true,
                            'icon_size_xs':size === 'xs',
                            'icon_size_s':size === 's',
                            'icon_size_m':size === 'm' || !size,
                            'icon_size_l':size === 'l',
                            'icon_size_xl':size === 'xl',
                            'icon_size_xxl':size === 'xxl',
                            'icon_size_xxxl':size === 'xxxl',
                            'icon_colored':colored,
                            'icon_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'icon_theme_alfa-on-color': theme === 'alfa-on-color',
                            'icon_name_currency-eur': name === 'currency-eur',
                            'icon_name_bank-2449': name === 'bank-2449'
               }">
            {{ text }}
        </span>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Icon {
    @Input() size: string;
    @Input() hasDefaultMargins = true;
    @Input() text: string;
    @Input() name: string;
    @Input() theme: string;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() colored: boolean;
}

@NgModule({
    imports: [CommonModule],
    exports: [Icon],
    declarations: [Icon]
})
export class IconModule {
}
