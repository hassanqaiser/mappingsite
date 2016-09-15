import { Component, Input } from '@angular/core';

@Component({
    selector: 'tab',
    template: 
    `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
    `,
    styles:[`
    .pane{
        padding:0px;
        font-family: serif;
        font-style: oblique;
    }
    .esriLabel{
        color: black;
    }
    `]
})
export class TabComponent {
    @Input('tabTitle') title: string;
    @Input() active = false;
}