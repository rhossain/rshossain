import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  Validators,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { DividerModule } from 'primeng/divider';
import emailjs from '@emailjs/browser';
import { NgxCaptchaModule, ReCaptcha2Component } from 'ngx-captcha';
import { ThemeService } from '../../services/theme.service';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { SocialsComponent } from "../../shared/socials/socials.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, FloatLabelModule, TextareaModule, ToastModule, DividerModule, FontAwesomeModule, NgxCaptchaModule, SocialsComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  providers: [MessageService]
})
export class ContactComponent implements OnInit {
  @ViewChild('captchaElem') captchaElem!: ReCaptcha2Component;

  themeService: ThemeService = inject(ThemeService);
  contactForm!: FormGroup;
  siteKey: string = '6Ld75N8qAAAAANR83I8KueuCEgJrhpy7U_NSQamp';

  constructor(
    private messageService: MessageService, 
    private fb: FormBuilder,
    library: FaIconLibrary
  ) {
    library.addIcons(
      faArrowRight
    );
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      msg: new FormControl('', [Validators.required]),
      recaptcha: new FormControl('', [Validators.required]),
    });
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
          this.captchaElem.resetCaptcha();
        },
        (err) => {
          console.log('Message not sent!!!', err);
          this.showError();
        }
      );
  }
}
