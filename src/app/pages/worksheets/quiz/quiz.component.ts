import { Component, OnInit, ViewChild } from '@angular/core';
import { quizData, readingData } from '../../../shared/data';
import { FormComponent } from '../../../shared/components/form/form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizDTO, ReadingDTO } from '../../../shared/dto/quiz.dto';
import { ReadingComponent } from '../../../shared/components/reading/reading.component';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { FormBuilder } from '@angular/forms';
import { FeedbackComponent } from '../../../shared/components/feedback/feedback.component';
import { FeedbackService } from '../../../shared/components/feedback/feedback.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [
    FormComponent,
    CommonModule,
    ReadingComponent,
    NavbarComponent,
    NavbarComponent,
    FeedbackComponent,
  ],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  @ViewChild(FeedbackComponent) feedbackComponent!: FeedbackComponent;

  data = [...quizData, ...readingData];
  quiz?: QuizDTO | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!;
      this.quiz = this.data.find(
        (quiz) => quiz.id.toString() === id
      ) as ReadingDTO; // This should be QuizDTO but idgf for now, ReadingDTO is exteded from QuizDTO
    });
  }

  sendFeedback() {
    if (this.feedbackComponent) {
      this.feedbackComponent.quizData = this.quiz;
      this.feedbackComponent.sendEmailToServer();

      console.log('Feedback sent with component!', this.quiz);
    }

    console.log('Feedback sent without component!');
  }
}
