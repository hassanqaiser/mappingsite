import { Component, ElementRef } from '@angular/core';
import { MapService } from '../services/map.service';
import LayerList = require('esri/dijit/LayerList');

@Component({
  selector: 'esri-legend',
  template: '<div></div>',
  styles:[`
    .layerMenuButton{
      margin: 0px;
    }
    .esriButton {
      margin: 0px;
    }
  `]
})
export class LegendComponent {

  constructor(private elRef:ElementRef, private _mapService:MapService) {}
  legend: any;

  init(map, layerInfos) {
    //this.legend = this._mapService.createLegend({map, layerInfos}, this.elRef.nativeElement.firstChild);
    
    let layers = [];

    //console.log(layerInfos);
    layerInfos.forEach((layer) => {
      // var btnNode = document.createElement('button');
      // btnNode.className="btn btn-xs";
      // btnNode.type = "button";
      // btnNode.name = 'Click';
      // btnNode.value = 'Click';
      // btnNode.id = layer.id;
      var btnDiv = document.createElement('div');
      btnDiv.className="btn-group layerMenuButton";
      btnDiv.style.cssText = "margin:0px;";
      btnDiv.innerHTML = `

          <button id="` + layer.layer.id + `" type="button" class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
            <span class="glyphicon glyphicon-align-justify"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li><a href = "http://services.arcgis.com/jDGuO8tYggdCCnUJ/arcgis/rest/services/US_State_Boundaries/FeatureServer/0" target="_blank">Description</a></li>
          </ul>

    `;
      layer.button = btnDiv; 
      layer.showSubLayers = true;
      layers.push(layer);
    });

    var myWidget = new LayerList({
        map: map,
        layers: layers,
        showLegend: true,
        showSubLayers: true,
        removeUnderscores: true
    },this.elRef.nativeElement.firstChild);

    myWidget.startup();

    //this.legend.startup();
  }

  btnClicked(id) {
     alert(id);
  }

  // destroy legend dijit
  ngOnDestroy() {
    if (this.legend) {
      this.legend.destroy();
    }
  }
}
