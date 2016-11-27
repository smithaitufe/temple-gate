import { Component } from '@angular/core';
@Component({
    selector: 'public',
    template: `
        <header>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" routerLink="/" routerLinkActiveOptions="{exact: true}">Temple Gate</a>
                </div>
                <ul class="nav navbar-nav">
                    <li><a routerLink="/about" routerLinkActive="active">About</a></li>
                    <li><a routerLink="/contact" routerLinkActive="active">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>
    <router-outlet></router-outlet>`
})
export class PublicComponent {}