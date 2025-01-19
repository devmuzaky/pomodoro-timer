import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProgressDotsComponent} from './progress-dots.component';

describe('ProgressDotsComponent', () => {
  let component: ProgressDotsComponent;
  let fixture: ComponentFixture<ProgressDotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressDotsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProgressDotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
