import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRouting, appComponents } from './app.routes';


@NgModule({
    imports: [BrowserModule, appRouting],
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent]
})
export class AppModule{}