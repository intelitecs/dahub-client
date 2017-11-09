import {Component, OnInit} from "@angular/core";

@Component({
  moduleId:'app-cnps',
  selector:'app-cnps',
  styleUrls:['./cnps.component.css'],
  template: `
    <nav class="cnps-nav" mat-tab-nav-bar>
      <a style="font-size: 10px;"
         *ngFor="let link of links" mat-tab-link [routerLink]="link.route"
         routerLinkActive #rla="routerLinkActive" [active]="rla.isActive">{{link.label | uppercase}}</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class CnpsComponent implements OnInit{

  public links: Array<any> = [
    {"route":"dashboard", "label":"Dashboard"},
    {"route":"situation", "label":"Situation"},
    {"route":"personnel", "label":"Gestion du Personnel"},
    //{"route":"simulation","label":"Simulations"}
  ];

  ngOnInit(){

  }
}
