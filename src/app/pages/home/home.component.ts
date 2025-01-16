import { Component, inject } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  themeService: ThemeService = inject(ThemeService);

  toggleDarkMode() {
    this.themeService.updateDarkMode();
  }
  
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDownload
    );
  }
}
