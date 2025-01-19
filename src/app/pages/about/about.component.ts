import { Component, inject } from '@angular/core';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faBriefcase,
  faDownload,
  faGraduationCap
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

  experienceItems: any[] = [
    { 
      company: 'Brain Station 23 PLC.',
      startDate: '2016',
      endDate: 'Present',
      designation: 'Lead UI Engineer',
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
    },
    { 
      company: 'Blueliner Digital Ltd.',
      startDate: '2013',
      endDate: '2016',
      designation: 'Software Engineer',
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
    },
    { 
      company: 'Codemen Solution Inc',
      startDate: '2012',
      endDate: '2013',
      designation: 'Software Engineer',
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
    },
    { 
      company: 'Uranus BD',
      startDate: '2009',
      endDate: '2011',
      designation: 'Web Developer',
      shortDesc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
    }
  ];

  educationItems: any[] = [
    { 
      name: 'Bachelor of Science in Computing & Information System',
      year: '2009',
      institute: 'London Metropolitan University',
      address: 'UK'
    },
    { 
      name: 'International Advanced Diploma in Computing System',
      year: '2007',
      institute: 'NCC Education',
      address: 'UK'
    },
    { 
      name: 'International Diploma in E-Commerce',
      year: '2006',
      institute: 'NCC Education',
      address: 'UK'
    }
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBriefcase,
      faDownload,
      faGraduationCap
    );
  }
}
