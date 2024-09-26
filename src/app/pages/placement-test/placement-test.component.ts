import { Component } from '@angular/core';
import { FormComponent } from '../../shared/components/form/form.component';
import { placementTest } from '../../shared/data';
import { QuizDTO, ReadingDTO } from '../../shared/dto/quiz.dto';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-placement-test',
  standalone: true,
  imports: [FormComponent, CommonModule, NavbarComponent],
  templateUrl: './placement-test.component.html',
  styleUrl: './placement-test.component.scss',
})
export class PlacementTestComponent {
  data = placementTest;
  placementTestData?: QuizDTO | undefined;

  ngOnInit() {
    this.placementTestData = this.data[0];
  }
}
