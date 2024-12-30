import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, FontAwesomeModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rshossain';
  
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
