import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Subject, takeUntil} from 'rxjs';
import {Timer, TimerState, TimerType} from '../timer.types';
import {SettingsService, TimerSettings} from './settings.service';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private timersSubject = new BehaviorSubject<Timer[]>([]);
  timers$ = this.timersSubject.asObservable();
  private stopTimer$ = new Subject<void>();

  constructor(
    private settingsService: SettingsService
  ) {
    this.settingsService.settings$.subscribe(settings => {
      this.initializeTimers(settings);
    });
  }

  startTimer(timerType: TimerType): void {
    this.stopAllTimers();
    const updatedTimers = this.timersSubject.value.map(timer => {
      if (timer.type === timerType) {
        this.runTimer(timerType);
        return {...timer, state: TimerState.RUNNING};
      } else {
        return {
          ...timer,
          state: TimerState.IDLE
        };
      }
    });

    this.timersSubject.next(updatedTimers);
  }

  pauseTimer(timerType: TimerType): void {
    this.stopTimer$.next();

    const updatedTimers = this.timersSubject.value.map(timer => {
      if (timer.type === timerType) {
        return {...timer, state: TimerState.PAUSED};
      }
      return timer;
    });

    this.timersSubject.next(updatedTimers);
  }

  resetTimer(timerType: TimerType): void {
    this.stopTimer$.next();

    const updatedTimers = this.timersSubject.value.map(timer => {
      if (timer.type === timerType) {
        return {
          ...timer,
          currentTime: timer.duration,
          state: TimerState.IDLE
        };
      }
      return timer;
    });

    this.timersSubject.next(updatedTimers);
  }

  skipTimer(timerType: TimerType): void {
    this.stopTimer$.next();
    this.handleTimerCompletion(timerType);
  }

  private initializeTimers(settings: TimerSettings) {
    const timers: Timer[] = [
      {
        type: TimerType.FOCUS,
        duration: settings.focusDuration,
        currentTime: settings.focusDuration,
        state: TimerState.IDLE,
        sessions: 0,
        color: '#E57373',
        totalSessions: 4
      },
      {
        type: TimerType.SHORT_BREAK,
        duration: settings.shortBreakDuration,
        currentTime: settings.shortBreakDuration,
        state: TimerState.IDLE,
        sessions: 0,
        color: '#4DB6AC',
        totalSessions: 4
      },
      {
        type: TimerType.LONG_BREAK,
        duration: settings.longBreakDuration,
        currentTime: settings.longBreakDuration,
        state: TimerState.IDLE,
        sessions: 0,
        color: '#5C6BC0',
        totalSessions: 1
      }
    ];

    this.timersSubject.next(timers);
  }

  private runTimer(timerType: TimerType): void {
    interval(1000)
      .pipe(takeUntil(this.stopTimer$))
      .subscribe(() => {
        const currentTimers = this.timersSubject.value;
        const timerIndex = currentTimers.findIndex(t => t.type === timerType);

        if (timerIndex === -1) return;

        const timer = currentTimers[timerIndex];

        if (timer.currentTime <= 0) {
          this.handleTimerCompletion(timerType);
          return;
        }

        const updatedTimers = currentTimers.map((t, index) => {
          if (index === timerIndex) {
            return {...t, currentTime: t.currentTime - 1};
          }
          return t;
        });

        this.timersSubject.next(updatedTimers);
      });
  }

  private handleTimerCompletion(timerType: TimerType): void {
    const currentTimers = this.timersSubject.value;
    const updatedTimers = currentTimers.map(timer => {
      if (timer.type === timerType) {
        const sessions = timer.sessions + 1;

        return {
          ...timer,
          currentTime: timer.duration,
          state: TimerState.IDLE,
          sessions: sessions % timer.totalSessions
        };
      }
      return timer;
    });

    this.timersSubject.next(updatedTimers);
    this.startNextTimer(timerType);
  }

  private startNextTimer(currentTimerType: TimerType): void {
    const currentTimer = this.timersSubject.value.find(t => t.type === currentTimerType);

    if (!currentTimer) return;

    let nextTimerType: TimerType;

    if (currentTimerType === TimerType.FOCUS) {
      const completedSessions = currentTimer.sessions;
      nextTimerType = completedSessions === 0 ?
        TimerType.LONG_BREAK : TimerType.SHORT_BREAK;
    } else {
      nextTimerType = TimerType.FOCUS;
    }

    this.startTimer(nextTimerType);
  }

  private stopAllTimers(): void {
    this.stopTimer$.next();

    const updatedTimers = this.timersSubject.value.map(timer => ({
      ...timer,
      state: TimerState.IDLE
    }));

    this.timersSubject.next(updatedTimers);
  }
}
