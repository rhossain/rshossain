import { Component, inject, OnInit } from '@angular/core';
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
import { SanityService } from '../../services/sanity.service';
import { Basic } from '../../model/types';
import { BlockToHtmlPipe } from "../../shared/block-to-html.pipe";

@Component({
  selector: 'app-home',
  imports: [CommonModule, NgOptimizedImage, FontAwesomeModule, SocialsComponent, BlockToHtmlPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);
  basic: Basic[] = [];
  imageUrl = 'https://i.ibb.co.com/CmNgWtD/sazzad-hossain-01.jpg';
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

  toggleDarkMode() {
    this.themeService.updateDarkMode();
  }
  
  constructor(
    library: FaIconLibrary,
    private sanityService: SanityService
  ) {
    library.addIcons(
      faDownload
    );
  }

  ngOnInit(): void {
    this.getAllBasic();
  }

  getImageUrl(image: any) {
    return this.sanityService.getImageUrlBuilder(image).url();
  }

  async getAllBasic(): Promise<Basic[]> {
    this.basic = await this.sanityService.getAllBasic();
    return this.basic;
  }
}
