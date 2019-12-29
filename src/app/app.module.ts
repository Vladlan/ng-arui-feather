import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from './common/button/button.component';
import {HeadingModule} from './common/heading/heading.component';
import {IconModule} from './common/icon/icon.component';
import {IconCurrencyEurModule} from './common/icon/currency/currency-eur/currency-eur.component';
import {IconBank2449Module} from './common/icon/currency/bank-2449/bank-2449.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        HeadingModule,
        IconModule,
        IconCurrencyEurModule,
        IconBank2449Module,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
