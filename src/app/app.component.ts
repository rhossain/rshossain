import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { ThemeService } from './services/theme.service';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { MaintenanceComponent } from './pages/maintenance/maintenance.component';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, CommonModule, NavigationComponent, MaintenanceComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    animations: [
      trigger('enter', [
        transition('enter', [
          style({ opacity: 0, scale: 0.7 }),
          animate('400ms ease-in', style({ opacity: 1, scale: 1 }))
        ])
      ])
    ]
})
export class AppComponent {
  title = 'Sazzad Hossain Robin';

  themeService: ThemeService = inject(ThemeService);
  
  isLive: boolean = true;
}
