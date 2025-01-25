import { Component, inject, model, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-portfolio',
  imports: [DialogModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioComponent {
  visibleModal: boolean = false;
  images = model([]);
  themeService: ThemeService = inject(ThemeService);

  responsiveOptions: any[] = [
      {
          breakpoint: '1300px',
          numVisible: 4
      },
      {
          breakpoint: '575px',
          numVisible: 1
      }
  ];

  portfolioItems: any[] = [
    { 
      name: 'Nop Kalles',
      year: '2020',
      client: 'Brain Station 23 Plc.',
      website: 'https://nop-kalles.nop-station.com/',
      featuredImg: '../../../assets/images/portfolio/nopkalles.jpeg',
      galleryImg: [
        '../../../assets/images/portfolio/nopkalles.jpeg', 
        '../../../assets/images/portfolio/kidstoys.jpeg', 
        '../../../assets/images/portfolio/kissingtree.jpeg'
      ],
      shortDesc: 'NopKalles is an eCommerce theme developed by using NopCommerce. The theme has some useful plugin that will enrich your e-commerce site with "out of box" features. It is a plug and play theme. We will try our best to make it better and release the future version from time to time following your feedback.',
      longDesc: `Technical responsibilities:
      - Developing the theme from scratch
      - All UI related works with clean code
      - Custom design for plugins used
      - Ensuring proper RTL support
      - Ensuring proper responsive view in different devices`,
      category: 'ecommerce'
    }
  ];
  
  showModal() {
      this.visibleModal = true;
  }
}
