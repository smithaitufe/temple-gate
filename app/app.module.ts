import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutes, appComponents } from './app.routes';


@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ...appComponents],
    bootstrap: [AppComponent]
})
export class AppModule{}