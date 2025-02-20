import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule, SocialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  themeService: ThemeService = inject(ThemeService);
  imageUrl = 'https://i.ibb.co.com/CmNgWtD/sazzad-hossain-01.jpg';
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  toggleDarkMode() {
    this.themeService.updateDarkMode();
  }
  
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faDownload
    );
  }
}
