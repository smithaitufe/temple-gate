import { publicRoutes } from './public/public.routing';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public/public.component';


export const appRoutes: Routes = [    
    {path: "", component: PublicComponent, redirectTo: "/home", pathMatch: "full"}
];

export const appRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);

export const appRoutingComponents: any = [
    PublicComponent
];



