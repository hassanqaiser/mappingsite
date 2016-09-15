import { Component, ViewChild } from '@angular/core';
import { MapComponent } from './map.component';
import { SearchComponent } from './search.component';
import { LegendComponent } from './legend.component';
import { BasemapSelect } from './basemapselect.component';
import { LayerComponent } from './layer.component';

@Component({
    selector: 'main-map',
    template:
    `
    <div class="row">
      <div class="col-sm-8 col-md-9 col-lg-9 map-col">
        <esri-map [itemId]="itemId" [options]="mapOptions" (mapLoaded)="onMapLoad($event)">
          <esri-search [options]="searchOptions"></esri-search>
          <div id="HomeButton"></div>
        </esri-map>
      </div>
      <div class="col-sm-4 col-md-3 col-lg-3">
        <tabs>
          <tab tabTitle="Layers">
            <label>Basemap:</label>
            <basemap-select (basemapSelected)="onBasemapSelected($event)"></basemap-select>
            <label>Operational Layers:</label>
            <esri-legend id="esriLayerList"></esri-legend> 
          </tab>  
        </tabs> 
      </div>
    </div>
    `,
    styles:[`
      #layerListPane{
          width:25%;
      }
      .esriLayer{
        background-color: #fff;
      }
      .esriLayerList .esriList{
          border-top:none;
      }
      .esriLayerList .esriTitle {
        background-color: #fff;
        border-bottom:none;
      }
      .esriLayerList .esriList ul{
        background-color: #fff;
      }      

    `]
})
export class MainMapComponent {

  // references to child components
  @ViewChild(MapComponent) mapComponent:MapComponent;
  @ViewChild(SearchComponent) searchComponent:SearchComponent;
  @ViewChild(LegendComponent) legendComponent:LegendComponent;
  @ViewChild(BasemapSelect) basemapSelect:BasemapSelect;

  title = 'Map Title';

  // map config
  //itemId = '8e42e164d4174da09f61fe0d3f206641';
  itemId = '98a4854bf226496ab6dc5214f5e2102e';
  
  public mapOptions = {
    basemap: 'gray',
    center: [-97, 38], // lon, lat
    zoom: 5
  };

  // search config
  public searchOptions = {
    enableButtonMode: true, //this enables the search widget to display as a single button
    enableLabel: false,
    enableInfoWindow: true,
    showInfoWindowOnSelect: true,
  };

  // once the map loads
  onMapLoad(response) {
    const map = response.map;

    // bind the search dijit to the map
    this.searchComponent.setMap(map);
    // initialize the leged dijit with map and layer infos
    this.legendComponent.init(map, response.layerInfos);
    // set the selected basemap
    this.basemapSelect.selectedBasemap = response.basemapName;
    // bind the map title
    this.title = response.itemInfo.item.title;

  }

  // set map's basemap in response to user changes
  onBasemapSelected(basemapName) {
    this.mapComponent.setBasemap(basemapName);
  }
}