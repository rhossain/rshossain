import { Component, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import emailjs from '@emailjs/browser';
import { ThemeService } from '../../services/theme.service';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SocialsComponent } from "../../shared/socials/socials.component";

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, InputTextModule, FloatLabelModule, TextareaModule, ToastModule, DividerModule, FontAwesomeModule, SocialsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent {
  themeService: ThemeService = inject(ThemeService);

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    msg: new FormControl('', [Validators.required]),
  });

  constructor(
    private messageService: MessageService, 
    library: FaIconLibrary
  ) {
    library.addIcons(
      faArrowRight
    );
  }

  showSuccess() {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Message is sent', key: 'br', life: 3000 });
  }

  showError() {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Message is not sent', key: 'br', life: 3000 });
  }

  sendEmail(e: Event) {
    e.preventDefault();

    emailjs
      .send(
        'service_l8932p9',
        'template_dhlosfx',
        { ...this.contactForm.value },
        {
          publicKey: 'twye9DbxkMuiig85C',
        }
      )
      .then(
        () => {
          console.log('Message sent!');
          this.showSuccess();
          this.contactForm.reset();
        },
        (err) => {
          console.log('Message not sent!!!', err);
          this.showError();
        }
      );
  }
}
