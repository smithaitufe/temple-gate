import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="jumbotron">
            <h1>This is my first component</h1>
        </div>

        <home></home>
        <about><about>
        <contact></contact>
    `,
    styles: [`
        .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
    `]
})
export class AppComponent {}