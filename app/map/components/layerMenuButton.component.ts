import { Component } from '@angular/core';

@Component({
    selector: 'layerMenuButton',
    template:
    `
    <div id="layerMenuButton" class="btn-group">
          <button type="button" class="btn btn-xs dropdown-toggle" data-toggle="dropdown">
            <span class="glyphicon glyphicon-align-justify"></span>
          </button>
          <ul class="dropdown-menu" role="menu">
            <li><a href="#">Tablet</a></li>
            <li><a href="#">Smartphone</a></li>
          </ul>
    </div>
    `,
    styles: [`
      margin:0px;
    `]
})
export class layerMenuButtonComponent {
  constructor(){
  }
}