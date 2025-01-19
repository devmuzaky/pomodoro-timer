import {Component} from '@angular/core';
import {Observable} from 'rxjs';
import {Timer, TimerAction} from '../../timer.types';
import {MaterialModule} from '../../shared/material.module';
import {CommonModule} from '@angular/common';
import {TimerCardComponent} from '../timer-card/timer-card.component';
import {TimerService} from '../../services/timer.servies';
import {SettingsDialogComponent} from '../settings-dialog/settings-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-timer-container',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    TimerCardComponent
  ],
  templateUrl: './timer-container.component.html',
  styleUrl: './timer-container.component.css'
})
export class TimerContainerComponent {
  timers$: Observable<Timer[]>;

  constructor(private timerService: TimerService, private dialog: MatDialog) {
    this.timers$ = this.timerService.timers$;
  }

  handleTimerAction(action: TimerAction): void {
    switch (action.type) {
      case 'start':
        this.timerService.startTimer(action.timerId);
        break;
      case 'pause':
        this.timerService.pauseTimer(action.timerId);
        break;
      case 'reset':
        this.timerService.resetTimer(action.timerId);
        break;
      case 'skip':
        this.timerService.skipTimer(action.timerId);
        break;
    }
  }

  openSettings() {
    this.dialog.open(SettingsDialogComponent);
  }
}
