import {Component, Input, NgModule, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
    selector: 'aru-heading',
    styleUrls: ['./heading.component.scss'],
    template: `
        <h1 *ngIf="size === 'xl' || !size"
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                            'heading heading_size_xl': true,
                            'heading_margins': hasDefaultMargins,
                            'heading_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'heading_theme_alfa-on-color': theme === 'alfa-on-color' || !theme
               }"
        >
            {{ text }}
        </h1>
        <h2 *ngIf="size === 'l'"
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                            'heading heading_size_l': true,
                            'heading_margins': hasDefaultMargins,
                            'heading_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'heading_theme_alfa-on-color': theme === 'alfa-on-color' || !theme
               }"
        >
            {{ text }}
        </h2>
        <h3 *ngIf="size === 'm'"
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                            'heading heading_size_m': true,
                            'heading_margins': hasDefaultMargins,
                            'heading_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'heading_theme_alfa-on-color': theme === 'alfa-on-color' || !theme
               }"
        >
            {{ text }}
        </h3>
        <h4 *ngIf="size === 's'"
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                            'heading heading_size_s': true,
                            'heading_margins': hasDefaultMargins,
                            'heading_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'heading_theme_alfa-on-color': theme === 'alfa-on-color' || !theme
               }"
        >
            {{ text }}
        </h4>
        <h5 *ngIf="size === 'xs'"
            [class]="styleClass"
            [ngStyle]="style"
            [ngClass]="{
                            'heading heading_size_xs': true,
                            'heading_margins': hasDefaultMargins,
                            'heading_theme_alfa-on-white': theme === 'alfa-on-white' || !theme,
                            'heading_theme_alfa-on-color': theme === 'alfa-on-color' || !theme
               }"
        >
            {{ text }}
        </h5>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Heading {
    @Input() size: string;
    @Input() hasDefaultMargins = true;
    @Input() text: string;
    @Input() theme: string;
    @Input() style: any;
    @Input() styleClass: string;
}

@NgModule({
    imports: [CommonModule],
    exports: [Heading],
    declarations: [Heading]
})
export class HeadingModule {
}
