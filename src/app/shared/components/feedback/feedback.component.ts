import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { FeedbackService } from './feedback.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss',
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  quizId?: string | null;

  isModalOpen = false;

  constructor(
    private fb: FormBuilder,
    private emailService: FeedbackService,
    private route: ActivatedRoute
  ) {
    this.feedbackForm = this.fb.group({
      from_name: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.quizId = params.get('id');
      console.log('DATA: ', this.quizId);
    });
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  sendFeedback() {
    if (this.feedbackForm.valid && this.quizId) {
      const formData = {
        ...this.feedbackForm.value,
        quiz_id: this.quizId,
      };

      this.emailService.sendEmail(formData).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          this.closeModal();
          this.feedbackForm.reset();
        },
        (error) => {
          console.error('FAILED...', error);
        }
      );
    } else {
      console.error(
        'Form is invalid or quiz ID is missing',
        'ID: ',
        this.quizId,
        'Form: ',
        this.feedbackForm
      );
    }
  }
}
