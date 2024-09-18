import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import emailjs from 'emailjs-com';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  @Input() quizData?: any;
  feedbackForm: FormGroup;

  constructor(private fb: FormBuilder, private emailService: FeedbackService) {
    this.feedbackForm = this.fb.group({
      from_name: ['', Validators.required],
      message: ['', Validators.required],
      reply_to: ['', [Validators.required, Validators.email]],
    });
  }

  sendEmailToServer(quizData?: any) {
    if (this.feedbackForm.valid) {
      const templateParams = {
        ...this.feedbackForm.value,
        quizData: JSON.stringify(quizData),
      };

      this.emailService.sendEmail(templateParams).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        }
      );
    }
  }
}
