import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HomeComponent, MaintenanceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sazzad Hossain Robin';
  
  isLive: boolean = true;
}
