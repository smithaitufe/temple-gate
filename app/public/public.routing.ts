import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PublicComponent } from './public.component';

export const publicRoutes: Routes = [
    {
        path: "",
        component: PublicComponent,
        children: [
            { path: "", component: HomeComponent },
            { path: "about", component: AboutComponent },
            { path: "contact", component: ContactComponent },
            { path: "**", component: NotFoundComponent }
        ]
    },

];
export const publicRoutingModule: ModuleWithProviders = RouterModule.forChild(publicRoutes);

export const publicRoutingComponents: any = [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NotFoundComponent,
    PublicComponent
];