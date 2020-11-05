import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaSelectorModule } from './pizza-selector/pizza-selector.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterModule.forRoot([
            {
                path: '',
                loadChildren: () => PizzaSelectorModule,
            },
        ]),
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
