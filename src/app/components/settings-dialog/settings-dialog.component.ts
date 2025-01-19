import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MaterialModule} from '../../shared/material.module';
import {SettingsService} from '../../services/settings.service';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-settings-dialog',
  imports: [CommonModule, MaterialModule, FormsModule],
  templateUrl: './settings-dialog.component.html',
  styleUrl: './settings-dialog.component.css'
})
export class SettingsDialogComponent {
  focusDuration: number = 25;
  shortBreakDuration: number = 5;
  longBreakDuration: number = 15;

  constructor(private settingsService: SettingsService, private dialogRef: MatDialogRef<SettingsDialogComponent>) {
  }

  saveSettings() {
    this.settingsService.setFocusDuration(this.focusDuration);
    this.settingsService.setShortBreakDuration(this.shortBreakDuration);
    this.settingsService.setLongBreakDuration(this.longBreakDuration);
    this.dialogRef.close();
  }
}
