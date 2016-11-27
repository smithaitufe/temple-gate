import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { publicRoutingModule, publicRoutingComponents } from './public.routing';

@NgModule({    
    imports: [CommonModule, publicRoutingModule],
    declarations: [...publicRoutingComponents]
})
export class PublicModule{}