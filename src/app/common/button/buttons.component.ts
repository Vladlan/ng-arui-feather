/* tslint:disable:variable-name */
import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'aru-buttons',
    template: `
        <div style="border: 1px solid red; width: 100%; min-height: 200px;">
            <aru-heading size="xl" text="Button Component">
            </aru-heading>
            <aru-heading size="l" text="Главная кнопка">
            </aru-heading>
            <aru-button
                    *ngFor="let button of mainButtons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    view="extra"
                    (click)="handleClick($event)"
            >
            </aru-button>
            <br>
            <aru-button
                    *ngFor="let button of mainButtons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    view="extra"
                    disabled={{true}}
                    (click)="handleClick($event)"
            >
            </aru-button>

            <aru-heading size="l" text="Обычная кнопка">
            </aru-heading>
            <aru-button
                    *ngFor="let button of buttons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    (click)="handleClick($event)"
            >
            </aru-button>
            <br>
            <aru-button
                    *ngFor="let button of buttons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    disabled={{true}}
                    (click)="handleClick($event)"
            >
            </aru-button>

            <aru-heading size="l" text="Псевдокнопка">
            </aru-heading>
            <aru-button
                    *ngFor="let button of pseudoButtons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    pseudo="{{true}}"
                    (click)="handleClick($event)"
            >
            </aru-button>

            <aru-heading size="l" text="С иконкой">
            </aru-heading>
            <aru-button
                    *ngFor="let button of buttonsWithIcons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    icon="bank-2449"
                    (click)="handleClick($event)"
            >
            </aru-button>

            <aru-heading size="l" text="Со 100% шириной">
            </aru-heading>
            <aru-button
                    *ngFor="let button of widthButtons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    width="available"
                    (click)="handleClick($event)"
            >
            </aru-button>

            <aru-heading size="l" text="Кнопка со скруглёнными углами">
            </aru-heading>
            <aru-button
                    *ngFor="let button of roundedButtons"
                    label="{{button.name}}"
                    size="{{button.size}}"
                    view="rounded"
                    (click)="handleClick($event)"
            >
            </aru-button>
        </div>
    `,
    encapsulation: ViewEncapsulation.None
})
export class Buttons {
    mainButtons = [
        { size: 'xl', name: 'Оплатить' },
        { size: 'l', name: 'Оплатить' },
        { size: 'm', name: 'Оплатить' },
        { size: 's', name: 'Оплатить' }
    ];
    buttons = [
        { size: 'xl', name: 'Применить' },
        { size: 'l', name: 'Применить' },
        { size: 'm', name: 'Применить' },
        { size: 's', name: 'Применить' }
    ];
    pseudoButtons = [
        { size: 'xl', name: 'Показать' },
        { size: 'l', name: 'Показать' },
        { size: 'm', name: 'Показать' },
        { size: 's', name: 'Показать' }
    ];
    widthButtons = [
        { size: 'xl', name: 'Заказать карту' },
        { size: 'l', name: 'Заказать карту' },
        { size: 'm', name: 'Заказать карту' },
        { size: 's', name: 'Заказать карту' }
    ];
    buttonsWithIcons = [
        { size: 'xl', name: 'Скачать' },
        { size: 'l', name: 'Скачать' },
        { size: 'm', name: 'Скачать' },
        { size: 's', name: 'Скачать' }
    ];
    roundedButtons = [
        { size: 'xl', name: 'Продолжить' },
        { size: 'l', name: 'Продолжить' },
        { size: 'm', name: 'Продолжить' },
        { size: 's', name: 'Продолжить' }
    ];

    handleClick() {
        console.log('click');
    }
}
