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
import { ThemeService } from '../../services/theme.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SocialsComponent } from '../socials/socials.component';

@Component({
  selector: 'app-navigation',
  imports: [FontAwesomeModule, RouterLink, RouterLinkActive, SocialsComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  themeService: ThemeService = inject(ThemeService);

  navItems: any[] = [
    { name: 'Home', link: '/home', iconGroup: 'fas', iconName: 'house' },
    { name: 'About', link: '/about', iconGroup: 'fas', iconName: 'user' },
    { name: 'Portfolio', link: '/portfolio', iconGroup: 'fas', iconName: 'briefcase' },
    { name: 'Contact', link: '/contact', iconGroup: 'fas', iconName: 'envelope-open' }
  ];
  
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
      faUser
    );
  }
}
