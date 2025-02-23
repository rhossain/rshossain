import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import emailjs from '@emailjs/browser';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FloatLabelModule, TextareaModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent implements OnInit {
  themeService: ThemeService = inject(ThemeService);

  contactForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    msg: new FormControl("", [Validators.required]),
  })

  ngOnInit() {
    
  }

  onSubmit() {
    const formValue = this.contactForm.value;
    console.log(formValue);

    emailjs.send(
      'service_l8932p9', 
      'template_dhlosfx', 
      { ...this.contactForm }, 
      {
        publicKey: 'twye9DbxkMuiig85C'
      }
      )
      .then(
      () => {
        console.log('Sent!');
      },
      (err) => {
        console.log('FAILED...', err);
      },
    );
  }
}
