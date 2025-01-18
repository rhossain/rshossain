import { Component, inject } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../../services/theme.service';
import { SocialsComponent } from '../../shared/socials/socials.component';

@Component({
  selector: 'app-about',
  imports: [FontAwesomeModule, SocialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  themeService: ThemeService = inject(ThemeService);

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDownload
    );
  }
}
