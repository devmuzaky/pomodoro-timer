import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface TimerSettings {
  focusDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
}

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private readonly DEFAULT_SETTINGS: TimerSettings = {
    focusDuration: 25 * 60,
    shortBreakDuration: 5 * 60,
    longBreakDuration: 15 * 60
  };

  private settingsSubject = new BehaviorSubject<TimerSettings>(this.DEFAULT_SETTINGS);
  settings$ = this.settingsSubject.asObservable();

  updateSettings(settings: Partial<TimerSettings>) {
    this.settingsSubject.next({
      ...this.settingsSubject.value,
      ...settings
    });
  }

  setFocusDuration(minutes: number) {
    this.updateSettings({focusDuration: minutes * 60});
  }

  setShortBreakDuration(minutes: number) {
    this.updateSettings({shortBreakDuration: minutes * 60});
  }

  setLongBreakDuration(minutes: number) {
    this.updateSettings({longBreakDuration: minutes * 60});
  }
}
