import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../material.module';

@Component({
  selector: 'app-circular-timer',
  imports: [CommonModule, MaterialModule],
  templateUrl: './circular-timer.component.html',
  styleUrl: './circular-timer.component.css'
})
export class CircularTimerComponent {
  @Input() currentTime!: number;
  @Input() totalTime!: number;
  @Input() color!: string;

  get progressValue(): number {
    return (this.currentTime / this.totalTime) * 100;
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }
}
