import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { publicRoutingModule, publicRoutingComponents } from './public.routing';

@NgModule({    
    imports: [publicRoutingModule],
    declarations: [...publicRoutingComponents]
})
export class PublicModule{}