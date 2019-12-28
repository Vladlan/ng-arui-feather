import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ButtonModule} from './common/button/button.component';
import {HeadingModule} from './common/heading/heading.component';

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ButtonModule,
        HeadingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
