import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutingModule, appRoutingComponents } from './app.routing';
import { PublicModule } from './public/public.module';


@NgModule({
    imports: [BrowserModule, PublicModule, appRoutingModule],
    declarations: [AppComponent, ...appRoutingComponents],
    bootstrap: [AppComponent]
})
export class AppModule{}