import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from './common/button/button.component';
import { HeadingModule } from './common/heading/heading.component';
import { IconModule } from './common/icon/icon.component';
import { IconCurrencyEurModule } from './common/icon/currency/currency-eur/currency-eur.component';
import { IconBank2449Module } from './common/icon/currency/bank-2449/bank-2449.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Buttons } from './common/button/buttons.component';
import { Icons } from './common/icon/icons.component';
import { HolderWrapper } from './common/button/holderWrapper.component';
import { Holder } from './common/button/holder.component';
import { CollapseModule } from './common/collapse/collapse.component';
import { Collapses } from './common/collapse/collapses.component';

@NgModule({
  declarations: [
    AppComponent,
    Buttons,
    Collapses,
    Icons,
    Holder,
    HolderWrapper
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CollapseModule,
    HeadingModule,
    IconModule,
    IconCurrencyEurModule,
    IconBank2449Module,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
