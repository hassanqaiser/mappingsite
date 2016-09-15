import { Component, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import FeatureLayer = require('esri/layers/FeatureLayer');
import InfoTemplate = require('esri/InfoTemplate');


@Component({
  selector: 'esri-search',
  template: '<div></div>',
  inputs: ['options']
})
export class SearchComponent {

  constructor(private elRef:ElementRef, private _mapService:MapService) {}

  search: any;
  options: Object;

  // create the search dijit
  ngOnInit() {

    this.search = this._mapService.createSearch(this.options, this.elRef.nativeElement.firstChild);

    var sources = this.search.get("sources");
    //var sources = [];
    sources.push({
            featureLayer: new FeatureLayer("https://services.arcgis.com/jDGuO8tYggdCCnUJ/arcgis/rest/services/US_State_Boundaries/FeatureServer/0"),
            searchFields: ["STATE_NAME"],
            displayField: "STATE_NAME",
            exactMatch: false,
            outFields: ["*"],
            name: "US State Boundaries",
            placeholder: "e.g Utah",
            maxResults: 6,
            maxSuggestions: 6,

            //Create an InfoTemplate and include three fields
            infoTemplate: new InfoTemplate("US State Boundaries", "STATE NAME: ${STATE_NAME}</br>SUB REGION: ${SUB_REGION}"),
            enableSuggestions: true,
            minCharacters: 0
         });

        //  sources.push({
        //     featureLayer: new FeatureLayer("https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/US_Senators/FeatureServer/0"),
        //     searchFields: ["Name"],
        //     displayField: "Name",
        //     exactMatch: false,
        //     name: "Senator",
        //     outFields: ["*"],
        //     placeholder: "Senator name",
        //     maxResults: 6,
        //     maxSuggestions: 6,

        //     //Create an InfoTemplate

        //     infoTemplate: new InfoTemplate("Senator information", "Name: ${Name}</br>State: ${State}</br>Party Affiliation: ${Party}</br>Phone No: ${Phone_Number}<br><a href=${Web_Page} target=_blank ;'>Website</a>"),
            
        //     enableSuggestions: true,
        //     minCharacters: 0
        //  });

         this.search.set("sources", sources);
         this.search.startup();
  }

  // start up once the DOM is ready
  ngAfterViewInit() {
    this.search.startup();
  }

  // bind search dijit to map
  setMap(map) {
    this.search.set('map', map);
  }

  // destroy search dijit
  ngOnDestroy() {
    if (this.search) {
      this.search.destroy();
    }
  }
}
