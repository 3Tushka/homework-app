import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { QuizDTO } from '../../dto/quiz.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnChanges {
  @Input() model!: QuizDTO;

  quizForm: FormGroup;
  step = 0;
  correctAnswers = 0;
  completetionPercentage: number = 0;
  showResults = false;
  showAnswers = false;
  formIncomplete = false;

  userChoosenAnswers: string[] = [];
  isAnswerCorrect: boolean[] = [];

  constructor(private fb: FormBuilder, private router: Router) {
    this.quizForm = this.fb.group({
      questions: this.fb.array([]),
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['model'] && this.model) {
      this.addQuestions();
      this.calculateCompletionPercentage();
    }
  }

  get questionsFormArray(): FormArray {
    return this.quizForm.get('questions') as FormArray;
  }

  addQuestions() {
    this.questionsFormArray.clear();
    this.model?.questions.forEach((q) => {
      this.questionsFormArray.push(
        this.fb.group({
          question: [q.question],
          answer: ['', Validators.required],
        })
      );
    });
  }

  selectOption(questionIndex: number, option: string): void {
    this.questionsFormArray.at(questionIndex)?.get('answer')?.setValue(option);
    this.userChoosenAnswers[questionIndex] = option;
  }

  nextStep() {
    if (this.step < this.questionsFormArray.length - 1) {
      this.step++;
      this.calculateCompletionPercentage();
    }
  }

  previousStep() {
    if (this.step > 0) {
      this.step--;
      this.calculateCompletionPercentage();
    }
  }

  onSubmit() {
    this.calculateCompletionPercentage();

    if (this.completetionPercentage < 100) {
      this.formIncomplete = true;
      console.error('Please answer all questions before submitting.');
      return;
    }

    this.formIncomplete = false;

    const userAnswers = this.quizForm.value.questions;

    userAnswers.forEach((userAnswer: any, index: number) => {
      if (userAnswer.answer === this.model?.questions[index].answer) {
        this.correctAnswers++;
      }
    });

    this.checkAnswers();

    this.showResults = true;
  }

  checkAnswers() {
    const checkAnswers = this.quizForm.value.questions;

    checkAnswers.forEach((userAnswer: any, index: number) => {
      this.isAnswerCorrect[index] =
        userAnswer.answer === this.model?.questions[index].answer;
    });
  }

  calculateCompletionPercentage() {
    if (this.model) {
      const totalQuestions = this.model.questions.length;
      const answeredQuestions = this.quizForm.value.questions.filter(
        (q: any) => q.answer
      ).length;
      this.completetionPercentage = (answeredQuestions / totalQuestions) * 100;
    }
  }

  resetQuiz() {
    this.showResults = false;
    this.showAnswers = false;
    this.step = 0;
    this.correctAnswers = 0;
    this.userChoosenAnswers = [];
    this.isAnswerCorrect = [];
    this.quizForm.reset();
    this.calculateCompletionPercentage();
  }

  goToWorksheets() {
    this.router.navigate(['/worksheets']);
  }
}
