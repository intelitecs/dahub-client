import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: 'app-cnps',
  selector: 'app-cnps-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public links: Array<any> = [
    {"route":"dashboard", "label":"Dashboard"},
    {"route":"situation", "label":"Situation"},
    {"route":"personnel", "label":"Gestion du Personnel"},
    //{"route":"simulation","label":"Simulations"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
