import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faDownload,
  faEnvelopeOpen,
  faHouse,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {
  faSun
} from '@fortawesome/free-regular-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  imports: [FontAwesomeModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
    constructor(library: FaIconLibrary) {
    library.addIcons(
      faBriefcase,
      faDownload,
      faEnvelopeOpen,
      faHouse,
      faSun,
      faUser,
      faFacebookF,
      faInstagram,
      faLinkedinIn,
      faSkype
    );
  }
}
