import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProgressDotsComponent} from '../../shared/progress-dots/progress-dots.component';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../shared/material.module';
import {CircularTimerComponent} from '../../shared/circular-timer/circular-timer.component';
import {ControlButtonsComponent} from '../../shared/control-buttons/control-buttons.component';
import {Timer, TimerAction, TimerState} from '../../timer.types';

@Component({
  selector: 'app-timer-card',
  imports: [
    CommonModule,
    MaterialModule,
    CircularTimerComponent,
    ControlButtonsComponent,
    ProgressDotsComponent
  ],
  templateUrl: './timer-card.component.html',
  styleUrl: './timer-card.component.css'
})
export class TimerCardComponent {
  @Input({required: true}) timer!: Timer;
  @Output() timerAction = new EventEmitter<TimerAction>();

  TimerState = TimerState;

  handleAction(action: 'start' | 'pause' | 'skip') {
    this.timerAction.emit({
      type: action,
      timerId: this.timer.type
    });
  }

  getBackgroundStyle() {
    return {
      'background-color': `${this.timer.color}80`,
      'border': `1px solid ${this.timer.color}`
    };
  }

  getHelpText(): string {
    switch (this.timer.type) {
      case 'Focus Time':
        return 'Focus on your task for 25 minutes';
      case 'Short Break':
        return 'Take a short 5-minute break';
      case 'Long Break':
        return 'Take a longer 15-minute break after completing 4 focus sessions';
      default:
        return 'Pomodoro Timer';
    }
  }
}
