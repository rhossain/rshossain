import { Component, inject } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faDownload,
  faEnvelopeOpen,
  faHouse,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { ThemeService } from '../../services/theme.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [FontAwesomeModule, RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  themeService: ThemeService = inject(ThemeService);
  
  toggleDarkMode() {
    this.themeService.updateDarkMode();
  }
  
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBriefcase,
      faDownload,
      faEnvelopeOpen,
      faHouse,
      faSun,
      faMoon,
      faUser,
      faFacebookF,
      faInstagram,
      faLinkedinIn,
      faSkype
    );
  }
}
