import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  buttons = [
    { size: 'xl', name: 'Оплатить' },
    { size: 'l', name: 'Оплатить' },
    { size: 'm', name: 'Оплатить' },
    { size: 's', name: 'Оплатить' }
  ];

  handleClick() {
    console.log('click');
  }
}
