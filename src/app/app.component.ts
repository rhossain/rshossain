import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { ThemeService } from './services/theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, HomeComponent, MaintenanceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sazzad Hossain Robin';

  themeService: ThemeService = inject(ThemeService);
  
  isLive: boolean = true;
}
