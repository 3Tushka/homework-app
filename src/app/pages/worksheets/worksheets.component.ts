import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { FormComponent } from '../../shared/components/form/form.component';
import { quizData, readingData } from '../../shared/data';

import { hasProperties } from '../../shared/utils/functions';

import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-worksheets',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormComponent,
    ReactiveFormsModule,
    NavbarComponent,
  ],
  templateUrl: './worksheets.component.html',
  styleUrl: './worksheets.component.scss',
})
export class WorksheetsComponent {
  data = [...quizData, ...readingData];
  filteredData = this.data;
  filterForm: FormGroup;

  accordionState: { [key: string]: boolean } = {
    grammar: false,
    level: false,
    grade: false,
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.filterForm = this.fb.group({
      level: this.fb.array([]),
      grade: this.fb.array([]),
      grammar: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.filteredData = this.data;
    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilter();
    });
    this.loadAccordionState();
  }

  navigateToQuiz(id: string | number) {
    this.router.navigate([id], { relativeTo: this.route });
  }

  onCheckboxChange(e: any, controlName: string) {
    const checkArray: FormArray = this.filterForm.get(controlName) as FormArray;
    if (e.target.checked) {
      checkArray.push(this.fb.control(e.target.value));
    } else {
      const index = checkArray.controls.findIndex(
        (x) => x.value === e.target.value
      );
      checkArray.removeAt(index);
    }
  }

  applyFilter() {
    this.filteredData = this.data.filter((item) => {
      return (
        (this.filterForm.value.level.length === 0 ||
          (hasProperties<{ level: string }>(item, ['level']) &&
            this.filterForm.value.level.includes(item.level))) &&
        (this.filterForm.value.grade.length === 0 ||
          (hasProperties<{ grade: string }>(item, ['grade']) &&
            this.filterForm.value.grade.includes(item.grade))) &&
        (this.filterForm.value.grammar.length === 0 ||
          (hasProperties<{ grammar: string }>(item, ['grammar']) &&
            this.filterForm.value.grammar.includes(item.grammar)))
      );
    });
  }

  saveAccordionState() {
    localStorage.setItem('accordionState', JSON.stringify(this.accordionState));
  }

  loadAccordionState() {
    const saveState = localStorage.getItem('accordionState');
    if (saveState) {
      this.accordionState = JSON.parse(saveState);
    }
  }

  toggleAccordion(section: string) {
    this.accordionState[section] = !this.accordionState[section];
    this.saveAccordionState();
  }

  isAccordionExpanded(section: string): boolean {
    return this.accordionState[section];
  }
}
