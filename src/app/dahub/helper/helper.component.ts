import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: 'app-helper',
  selector: 'app-helper',
  styleUrls:['./helper.component.css'],
  template: `
    <router-outlet></router-outlet>
  `
})

export class HelperComponent implements OnInit{

  ngOnInit(){}

}
