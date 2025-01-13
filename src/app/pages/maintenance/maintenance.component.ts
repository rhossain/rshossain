import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-maintenance',
  imports: [FontAwesomeModule],
  templateUrl: './maintenance.component.html',
  styleUrl: './maintenance.component.scss'
})
export class MaintenanceComponent {
    constructor(library: FaIconLibrary) {
        library.addIcons(
          faFacebookF,
          faInstagram,
          faLinkedinIn,
          faSkype
        );
    }
}
