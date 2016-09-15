import { Routes, RouterModule } from '@angular/router';

import { MainMapComponent }  from './map/components/mainmap.component';


const appRoutes: Routes = [

  {
    path: '',
    component: MainMapComponent
  }
];

export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);
