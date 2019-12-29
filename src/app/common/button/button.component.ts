/* tslint:disable:variable-name */
import {Component, EventEmitter, Input, NgModule, Output, ViewEncapsulation} from '@angular/core';
import {CommonModule} from '@angular/common';
import {IconModule} from '../icon/icon.component';
import keyboardCode from '../../lib/keyboard-code.js';

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
                        'button_focused': focused === undefined ? _focused : focused,
                        'button_hovered': hovered === _hovered,
                        'button_pressed': _pressed,
                        'button_disabled': disabled}"
                (click)="handleClick($event)"
                (focus)="handleFocus($event)"
                (blur)="handleBlur($event)"
                (mouseenter)="handleMouseEnter($event)"
                (mouseleave)="handleMouseLeave($event)"
                (mousedown)="handleMouseDown($event)"
                (mouseup)="handleMouseUp($event)"
                (mouseout)="handleMouseOut($event)"
                (keydown)="handleKeyDown($event)"
                (keyup)="handleKeyUp($event)"
        >
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
    @Input() focused: boolean;
    @Input() hovered: boolean;
    @Input() tabIndex: number;
    @Input() view: string;
    @Input() label: string;
    @Input() disabled: boolean;
    @Input() colored: boolean;
    @Input() style: any;
    @Input() styleClass: string;
    @Input() clickHandler: (event) => void;
    @Input() focusHandler: (event) => void;
    @Input() blurHandler: (event) => void;
    @Input() onMouseEnter: (event) => void;
    @Input() onMouseLeave: (event) => void;
    @Input() onMouseDown: (event) => void;
    @Input() onMouseUp: (event) => void;
    @Input() onMouseOut: (event) => void;
    @Input() onKeyDown: (event) => void;
    @Input() onKeyUp: (event) => void;
    @Output() onClick: EventEmitter<any> = new EventEmitter();
    @Output() onFocus: EventEmitter<any> = new EventEmitter();
    @Output() onBlur: EventEmitter<any> = new EventEmitter();

    _pressed = false;
    _focused = false;
    _hovered = false;

    handleClick = (event) => {
        if (this.clickHandler) {
            this.clickHandler(event);
        }
    }

    handleFocus = (event) => {
        if (this._pressed) {
            return;
        }

        this._focused = true;

        if (this.focusHandler) {
            this.focusHandler(event);
        }
    }

    handleBlur = (event) => {
        this._focused = false;

        if (this.blurHandler) {
            this.blurHandler(event);
        }
    }

    handleMouseEnter = (event) => {
        if (!this.disabled) {
            this._hovered = true;
        }

        if (this.onMouseEnter) {
            this.onMouseEnter(event);
        }
    }

    handleMouseLeave = (event) => {
        if (!this.disabled) {
            this._hovered = false;
        }

        if (this.onMouseLeave) {
            this.onMouseLeave(event);
        }
    }

    handleMouseDown = (event) => {
        if (!this.disabled) {
            this._pressed = true;
        }

        if (this.onMouseDown) {
            this.onMouseDown(event);
        }
    }

    handleMouseUp = (event) => {
        if (!this.disabled) {
            this._pressed = false;
        }

        if (this.onMouseUp) {
            this.onMouseUp(event);
        }
    }

    handleMouseOut = (event) => {
        if (!this.disabled) {
            this._pressed = false;
        }

        if (this.onMouseOut) {
            this.onMouseOut(event);
        }
    }

    handleKeyDown = (event) => {
        if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE) && !this.disabled) {
            this._pressed = true;
        }

        if (this.onKeyDown) {
            this.onKeyDown(event);
        }
    }

    handleKeyUp = (event) => {
        if ((event.which === keyboardCode.ENTER || event.which === keyboardCode.SPACE) && !this.disabled) {
            this._pressed = false;
        }

        if (this.onKeyUp) {
            this.onKeyUp(event);
        }
    }
}

@NgModule({
    imports: [CommonModule, IconModule],
    exports: [Button],
    declarations: [Button]
})
export class ButtonModule {
}
