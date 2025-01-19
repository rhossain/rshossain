import { Component } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-socials',
  imports: [FontAwesomeModule],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.scss'
})
export class SocialsComponent {
  socialItems: any[] = [
    { name: 'Facebook', link: 'https://www.facebook.com/rhossainbd', iconClass: 'facebook', iconGroup: 'fab', iconName: 'facebook-f' },
    { name: 'Skype', link: 'https://join.skype.com/invite/vwNHYMYW5jvJ', iconClass: 'skype', iconGroup: 'fab', iconName: 'skype' },
    { name: 'Linkedin', link: 'https://www.linkedin.com/in/rhossain', iconClass: 'linkedin', iconGroup: 'fab', iconName: 'linkedin-in' },
    { name: 'Instagram', link: 'https://www.instagram.com/rshossain.bd', iconClass: 'instagram', iconGroup: 'fab', iconName: 'instagram' }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faFacebookF,
      faInstagram,
      faLinkedinIn,
      faSkype
    );
  }
}
