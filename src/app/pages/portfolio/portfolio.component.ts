import { Component, inject, model, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ThemeService } from '../../services/theme.service';
import { SanityService } from '../../services/sanity.service';
import { Project } from '../../model/types';
import { CommonModule } from '@angular/common';
import { BlockToHtmlPipe } from "../../shared/block-to-html.pipe";
import { OrderByPipe } from "../../shared/order-by.pipe";

@Component({
  selector: 'app-portfolio',
  imports: [DialogModule, CommonModule, BlockToHtmlPipe, OrderByPipe],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PortfolioComponent implements OnInit {
  visibleModal: boolean = false;
  images = model([]);
  projects: Project[] = [];
  project: any;
  themeService: ThemeService = inject(ThemeService);
  priority: string='priority';

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
      featuredImg: '../../../assets/images/portfolio/nopkalles-001.jpg',
      galleryImg: [
        '../../../assets/images/portfolio/nopkalles-001.jpg', 
        '../../../assets/images/portfolio/nopkalles-002.jpg', 
        '../../../assets/images/portfolio/nopkalles-003.jpg'
      ],
      shortDesc: `NopKalles is an eCommerce theme developed by using NopCommerce. The theme has some useful plugin that will enrich your e-commerce site with "out of box" features. It is a plug and play theme. We will try our best to make it better and release the future version from time to time following your feedback.`,
      longDesc: `- Developing the theme from scratch
      - All UI related works with clean code
      - Custom design for plugins used
      - Ensuring proper RTL support
      - Ensuring proper responsive view in different devices`,
      category: 'ecommerce',
      technologies: [
        'NopCommerce', 'CSS3', 'Bootstrap', 'jQuery'
      ]
    },
    { 
      name: 'Fortune',
      year: '2020',
      client: 'Brain Station 23 Plc.',
      website: 'https://fortune.nop-station.com/',
      featuredImg: '../../../assets/images/portfolio/fortune-001.jpg',
      galleryImg: [
        '../../../assets/images/portfolio/fortune-001.jpg', 
        '../../../assets/images/portfolio/fortune-002.jpg',
        '../../../assets/images/portfolio/fortune-003.jpg'
      ],
      shortDesc: `Fortune is an ecommerce theme developed by using NopCommerce. The theme has some useful plugin that will enrich your e-commerce site with "out of box" features. It is a plug and play theme.`,
      longDesc: `- Developing the theme from scratch
      - All UI related works with clean code
      - Custom design for plugins used
      - Ensuring proper RTL support
      - Ensuring proper responsive view in different devices`,
      category: 'ecommerce',
      technologies: [
        'NopCommerce', 'CSS3', 'Bootstrap', 'jQuery'
      ]
    },
    { 
      name: 'My Realty',
      year: '2020',
      client: 'Freelance',
      website: 'https://demo.rshossain.com/myrealty/',
      featuredImg: '../../../assets/images/portfolio/myrealty-001.jpg',
      galleryImg: [
        '../../../assets/images/portfolio/myrealty-001.jpg', 
        '../../../assets/images/portfolio/myrealty-002.jpg', 
        '../../../assets/images/portfolio/myrealty-003.jpg',
        '../../../assets/images/portfolio/myrealty-004.jpg',
        '../../../assets/images/portfolio/myrealty-005.jpg',
        '../../../assets/images/portfolio/myrealty-006.jpg',
        '../../../assets/images/portfolio/myrealty-007.jpg'
      ],
      shortDesc: `NopKalles is an eCommerceMyRealty is a Real Estate template (HTML) along with Blog, developed by using Bootstrap 3.x.`,
      longDesc: `Technical responsibilities:
      - Completely new responsive template with Bootstrap 3.x 
      ✔ Used SASS for better performance & browser compatibility 
      ✔ Used Grunt.js to minimize & combine CSS & JS files properly 
      ✔ Used animation with CSS3 & Javascripts 
      ✔ Used jQuery with different Javascripts plugins 
      ✔ Properly tested & fixed in different devices & browsers`,
      category: 'ecommerce',
      technologies: [
        'Real Estate', 'CSS3', 'Bootstrap', 'jQuery'
      ]
    },
    { 
      name: 'Kids Toys',
      year: '2020',
      client: 'Brain Station 23 Plc.',
      website: 'https://kidstoys.nop-station.com/',
      featuredImg: '../../../assets/images/portfolio/kidstoys-001.jpg',
      galleryImg: [
        '../../../assets/images/portfolio/kidstoys-001.jpg', 
        '../../../assets/images/portfolio/kidstoys-002.jpg', 
        '../../../assets/images/portfolio/kidstoys-003.jpg',
        '../../../assets/images/portfolio/kidstoys-004.jpg',
        '../../../assets/images/portfolio/kidstoys-005.jpg'
      ],
      shortDesc: `Kids Toys is an eCommerce theme developed by using NopCommerce. The theme has some useful plugin that will enrich your e-commerce site with "out of box" features. It is a plug and play theme. We will try our best to make it better and release the future version from time to time following your feedback.`,
      longDesc: `Technical responsibilities:
      - Developing the theme from scratch
      - All UI related works with clean code
      - Custom design for plugins used
      - Ensuring proper RTL support
      - Ensuring proper responsive view in different devices`,
      category: 'ecommerce',
      technologies: [
        'NopCommerce', 'CSS3', 'Bootstrap', 'jQuery'
      ]
    },
    { 
      name: 'Blueliner',
      year: '2020',
      client: 'Freelance',
      website: 'https://demo.rshossain.com/blueliner/',
      featuredImg: '../../../assets/images/portfolio/blueliner-001.jpg',
      galleryImg: [
        '../../../assets/images/portfolio/blueliner-001.jpg', 
        '../../../assets/images/portfolio/blueliner-002.jpg', 
        '../../../assets/images/portfolio/blueliner-003.jpg',
        '../../../assets/images/portfolio/blueliner-004.jpg',
        '../../../assets/images/portfolio/blueliner-005.jpg'
      ],
      shortDesc: `Blueliner is the static version of the website developed by using Bootstrap. It has been developed from the Photoshop design with a responsive feature.`,
      longDesc: `Technical responsibilities:
      - Developing the theme from scratch
      - All UI related works with clean code
      - Custom design for plugins used
      - Ensuring proper RTL support
      - Ensuring proper responsive view in different devices`,
      category: 'ecommerce',
      technologies: [
        'CSS3', 'Bootstrap', 'jQuery'
      ]
    }
  ];

  constructor(private sanityService: SanityService) {}
  ngOnInit(): void {
    this.getAllProjects();
    console.log(this.getAllProjects());
  }

  async getAllProjects(): Promise<Project[]> {
    this.projects = await this.sanityService.getAllProjects();
    return this.projects;
  }

  getImageUrl(image: any) {
    return this.sanityService.getImageUrlBuilder(image).url();
  }
  
  showModal() {
      this.visibleModal = true;
  }
}
