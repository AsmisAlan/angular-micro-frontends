import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellRoutingModule } from './shell-routing.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule],
    bootstrap: [AppComponent],
})
export class AppModule {}
