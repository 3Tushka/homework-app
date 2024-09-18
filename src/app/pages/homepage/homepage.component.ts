import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FeedbackComponent } from '../../shared/components/feedback/feedback.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FeedbackComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor() {}
}
