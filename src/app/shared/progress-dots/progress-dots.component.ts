import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';

@Component({
  selector: 'app-progress-dots',
  imports: [CommonModule, MaterialModule],
  templateUrl: './progress-dots.component.html',
  styleUrl: './progress-dots.component.css'
})
export class ProgressDotsComponent {
  @Input() total = 4;
  @Input() current = 0;

  get dots(): number[] {
    return Array(this.total).fill(0);
  }
}
