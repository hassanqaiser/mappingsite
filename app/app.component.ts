import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template:
    `
    <div class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="javascript:void(0)">My Mapping Site</a>
        </div>
        <div class="navbar-collapse collapse navbar-responsive-collapse">
          <ul class="nav navbar-nav">
            <li class="active">
                <a id="hlink" [routerLink]="['/']" data-toggle="offcanvas">
                <span class="glyphicon glyphicon-home"></span>
                <span>Home</span></a>          
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li>
                <a id="hlink"  href="javascript:void(0)" data-toggle="offcanvas">
                <span class="glyphicon glyphicon-log-in"></span>
                <span>Sign In</span></a>
            </li>
            <li>
                <a id="hlink" *ngIf="auth" href="javascript:void(0)" data-toggle="offcanvas">
                <span class="glyphicon glyphicon-log-out"></span>
                <span>Sign Out</span></a>
            </li>

          </ul>
        </div>
      </div>
    </div>
    
    <div class="container-fluid">
        <router-outlet></router-outlet>
    </div>
    `
})
export class AppComponent {
  auth: boolean = false;
  constructor(){
  }
}