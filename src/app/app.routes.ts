import { Routes } from '@angular/router';
import { WorksheetsComponent } from './pages/worksheets/worksheets.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { FormComponent } from './shared/components/form/form.component';
import { QuizComponent } from './pages/worksheets/quiz/quiz.component';

export const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'worksheets',
    component: WorksheetsComponent,
  },
  {
    path: 'worksheets/:id',
    component: QuizComponent,
  },
];
