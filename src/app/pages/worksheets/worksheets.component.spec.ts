import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksheetsComponent } from './worksheets.component';

describe('WorksheetsComponent', () => {
  let component: WorksheetsComponent;
  let fixture: ComponentFixture<WorksheetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorksheetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorksheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
