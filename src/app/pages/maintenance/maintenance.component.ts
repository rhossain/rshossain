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
import { SocialsComponent } from '../../shared/socials/socials.component';

@Component({
  selector: 'app-maintenance',
  imports: [FontAwesomeModule, SocialsComponent],
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
