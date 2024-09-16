import { Component, Input } from '@angular/core';
import { readingData } from '../../data';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReadingDTO } from '../../dto/quiz.dto';

@Component({
  selector: 'app-reading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading.component.html',
  styleUrl: './reading.component.scss',
})
export class ReadingComponent {
  readingDataConst = readingData;
  reading?: ReadingDTO;
  toggleText: boolean = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id')!;
      this.reading = this.readingDataConst.find(
        (reading) => reading.id.toString() === id
      ) as ReadingDTO;
    });
  }

  toggleModuleText() {
    this.toggleText = !this.toggleText;
  }
}
