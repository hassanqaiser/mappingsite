import { Component, ElementRef, Output, EventEmitter } from '@angular/core';
import { MapService } from '../services/map.service';
import HomeButton = require('esri/dijit/HomeButton');
import Scalebar = require('esri/dijit/Scalebar');


@Component({
  selector: 'esri-map',
  template: '<div><ng-content></ng-content></div>',
  inputs: ['options', 'itemId']
})
export class MapComponent {

  @Output() mapLoaded = new EventEmitter();

  map: any;
  options: Object;
  itemId: string;

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  ngOnInit() {
    // create the map
    this.options = {
      isZoomSlider : true,
      isPan : true,
      isPanArrows : true
    };

    this._mapService.createMap(this.itemId, this.elRef.nativeElement.firstChild, this.options).then((response) => {
      // get a reference to teh map and expose response to app
      this.map = response.map;
      this.mapLoaded.next(response);

      var home = new HomeButton({
        map: response.map
      }, "HomeButton");
      home.startup();

      var scalebar = new Scalebar({
        map: response.map,
        // "dual" displays both miles and kilometers
        // "english" is the default, which displays miles
        // use "metric" for kilometers
        scalebarUnit: "dual"
      });

    });
  }

  setBasemap(basemapName) {
    this._mapService.clearBasemap(this.map);
    this.map.setBasemap(basemapName);
  }

  // destroy map
  ngOnDestroy() {
    if (this.map) {
      this.map.destroy();
    }
  }
}
