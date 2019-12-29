import {Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.component';

@Component({
    selector: 'aru-button',
    styleUrls: ['./button.component.scss', './button_theme_alfa-on-color.scss', './button_theme_alfa-on-white.scss'],
    template: `
        <button [attr.type]="type"
                [class]="styleClass"
                [ngStyle]="style"
                [disabled]="disabled"
                [ngClass]="{'button': true,
                        'button_theme_alfa-on-white': true,
                        'button_size_s':size === 's',
                        'button_size_m':size === 'm',
                        'button_size_l':size === 'l',
                        'button_size_xl':size === 'xl',
                        'button_view_default': view === 'default' || !view,
                        'button_view_action': view === 'action',
                        'button_view_extra': view === 'extra',
                        'button_view_rounded': view === 'rounded',
                        'button_pseudo': pseudo,
                        'button_width_available': width === 'available',
                        'button_disabled': disabled}"
                (click)="onClick.emit($event)"
                (focus)="onFocus.emit($event)"
                (blur)="onBlur.emit($event)">
            <ng-content></ng-content>
            <aru-icon *ngIf="icon"
                      name="{{icon}}"
                      size="{{size}}"
                      colored="{{colored}}"
            ></aru-icon>
            <span>
                {{label || 'ui-btn'}}
            </span>
        </button>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Button {
    @Input() type: string;
    @Input() iconPos = 'left';
    @Input() icon: string;
    @Input() width: string;
    @Input() size: string;
    @Input() pseudo: boolean;
    @Input() tabIndex: number;
    @Input() view: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() colored: boolean;
    @Input() style: any;
    @Input() styleClass: string;
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();
}

@NgModule({
    imports: [CommonModule, IconModule],
    exports: [Button],
    declarations: [Button]
})
export class ButtonModule {
}
