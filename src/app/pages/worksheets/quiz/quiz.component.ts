import { Component, OnInit } from '@angular/core';
import { quizData } from '../../../shared/data';
import { FormComponent } from '../../../shared/components/form/form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuizDTO } from '../../../shared/dto/quiz.dto';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [FormComponent, CommonModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  data = quizData;
  quiz?: QuizDTO | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = +params.get('id')!;
      this.quiz = this.data.find((quiz) => quiz.id === id);
    });
  }
}
