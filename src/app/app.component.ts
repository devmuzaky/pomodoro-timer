import {Component} from '@angular/core';
import {RouterModule, RouterOutlet} from '@angular/router';
import {TimerContainerComponent} from './components/timer-container/timer-container.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterModule, RouterOutlet, TimerContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pomodoro-timer';
}
