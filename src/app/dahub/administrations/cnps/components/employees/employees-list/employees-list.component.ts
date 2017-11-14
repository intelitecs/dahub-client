import { Component, OnInit } from '@angular/core';
import {CnpsService} from "../../../cnps.service";

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  constructor(private cnpsService: CnpsService) { }

  ngOnInit() {

  }




}
