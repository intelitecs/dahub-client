import { Component, EventEmitter, Output } from "@angular/core";


@Component({
    moduleId: 'app-module',
    selector: 'dahub-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']    
})

export class DahubMenuComponent {
    
    @Output()
    sidenav = new EventEmitter<boolean>();

    toggleSidenav(){
        this.sidenav.emit(true);
    }
}