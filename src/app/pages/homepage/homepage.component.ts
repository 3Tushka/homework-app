import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { FeedbackComponent } from '../../shared/components/feedback/feedback.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NavbarComponent, FeedbackComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  constructor(private router: Router) {}

  goToPlacementTest(event: Event): void {
    event.preventDefault();
    this.router.navigate(['/placement-test']);
  }
}
