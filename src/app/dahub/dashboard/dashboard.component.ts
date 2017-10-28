import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: 'app-dashboard',
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls:['./dashboard.component.css']
})

export class DashboardComponent implements OnInit{

  name = 'Dahub Admin';
  ngOnInit(): void {
    console.log("Dashboard component");
  }




}
