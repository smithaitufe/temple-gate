import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
    <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="/">Temple Gate</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a routerLink='/about'>About</a></li>
                    <li><a routerLink='/contact'>Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <router-outlet></router-outlet>
    `
})
export class AppComponent {}