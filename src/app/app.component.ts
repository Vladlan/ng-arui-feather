import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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
