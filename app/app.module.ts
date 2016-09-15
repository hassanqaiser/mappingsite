import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TabComponent } from './map/components/tab.component';
import { TabsComponent } from './map/components/tabs.component';
import { MapComponent } from './map/components/map.component';
import { SearchComponent } from './map/components/search.component';
import { LegendComponent } from './map/components/legend.component';
import { BasemapSelect } from './map/components/basemapselect.component';
import { LayerComponent } from './map/components/layer.component';
import { AppComponent }  from './app.component';
import { layerMenuButtonComponent } from './map/components/layerMenuButton.component';

import { MainMapComponent }  from './map/components/mainmap.component';

import { MapService } from './map/services/map.service';

import {routing} from './app.routes';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [ 
    MainMapComponent,
    AppComponent,
    MapComponent, 
    SearchComponent, 
    LegendComponent, 
    BasemapSelect, 
    LayerComponent, 
    TabComponent, 
    TabsComponent,
    layerMenuButtonComponent
  ],
  providers: [
    MapService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
