import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const appRoutes: Routes = [
    {path: '', }
]

export let appComponents: any = [
    HomeComponent
    AboutComponent,
    ContactComponent
];


