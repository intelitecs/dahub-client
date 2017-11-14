import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from "ngx-webstorage";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  pageTitle = 'Bienvenu sur Dahub Admin';
  public logged_in: boolean = false;

  constructor(private localStorageService: LocalStorageService){

  }

  ngOnInit(){
    this.checkLoading();
  }

  public checkLoading(){
    this.localStorageService.observe('logged_in').subscribe((logged_in) =>{
      this.logged_in = logged_in;
    });
    const token = this.localStorageService.retrieve('token');
    if (token){
      this.logged_in = true;
    }
  }
}
