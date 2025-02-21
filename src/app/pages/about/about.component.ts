import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgOptimizedImage } from '@angular/common';
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
import { ChipModule } from 'primeng/chip';
import { KnobModule } from 'primeng/knob';

@Component({
  selector: 'app-about',
  imports: [CommonModule, NgOptimizedImage, FormsModule, ChipModule, KnobModule, FontAwesomeModule, SocialsComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  themeService: ThemeService = inject(ThemeService);

  imageUrl = 'https://i.ibb.co.com/CmNgWtD/sazzad-hossain-01.jpg';
  imageLoaded = false;

  onImageLoad() {
    this.imageLoaded = true;
  }

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

  skillItems: any[] = [
    { name: 'HTML', level: '92', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/html.png', visibility: 'show' },
    { name: 'CSS3', level: '92', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/css.png', visibility: 'show' },
    { name: 'SCSS', level: '90', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/sass.png', visibility: 'show' },
    { name: 'Tailwind CSS', level: '88', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/tailwind-css.png', visibility: 'show' },
    { name: 'Bootstrap', level: '85', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/bootstrap.png', visibility: 'show' },
    { name: 'JavaScript', level: '50', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/javascript.png', visibility: 'show' },
    { name: 'Angular', level: '40', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/angular.png', visibility: 'show' },
    { name: 'Angular Material', level: '50', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/material.png', visibility: 'show' },
    { name: 'Git', level: '85', rating: '5', experience: '17', iconGroup: '', iconName: '../../../assets/images/icons/git.png', visibility: 'show' },
    { name: 'Bangla', level: '95', rating: '5', experience: '17', iconGroup: '', iconName: '', visibility: 'show' },
    { name: 'English', level: '60', rating: '5', experience: '17', iconGroup: '', iconName: '', visibility: 'show' },
  ];

  constructor(library: FaIconLibrary) {
    library.addIcons(
      faBriefcase,
      faDownload,
      faGraduationCap
    );
  }
}
