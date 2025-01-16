import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/theme.service';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, NavigationComponent, MaintenanceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Sazzad Hossain Robin';

  themeService: ThemeService = inject(ThemeService);
  
  isLive: boolean = true;
}
