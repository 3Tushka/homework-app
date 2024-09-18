import { Component, HostListener, Input } from '@angular/core';
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
  reading?: ReadingDTO | undefined;
  toggleText: boolean = false;

  constructor(private route: ActivatedRoute) {
    document.onmouseup = () => {
      this.onSelectEventHandler();
    };
  }

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

  isSelected(range: Range): boolean {
    const span = document.createElement('span');
    span.appendChild(range.cloneContents());
    document.body.appendChild(span);
    const isSelected =
      window.getComputedStyle(span).backgroundColor === 'rgb(255, 255, 0)';
    document.body.removeChild(span);
    return isSelected;
  }

  setColorToRange(color: string): void {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      for (let i = 0; i < selection.rangeCount; i++) {
        const range = selection.getRangeAt(i);
        const span = document.createElement('span');
        span.style.backgroundColor = color;
        range.surroundContents(span);
      }
    }
  }

  onSelectEventHandler(): void {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
      if (
        parentElement &&
        parentElement.classList.contains('reading__passage--text')
      ) {
        if (this.isSelected(range)) {
          this.setColorToRange('unset');
        } else {
          this.setColorToRange('yellow');
        }
      }
      selection.removeAllRanges();
    }
  }

  // not reseting the color of the selected text
  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'R' || event.key === 'r') {
      this.setColorToRange('unset');
    }
  }
}
