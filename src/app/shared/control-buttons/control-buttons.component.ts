import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MaterialModule} from '../material.module';
import {CommonModule} from '@angular/common';
import {ActionType} from '../../timer.types';


@Component({
  selector: 'app-control-buttons',
  imports: [CommonModule, MaterialModule],
  templateUrl: './control-buttons.component.html',
  styleUrl: './control-buttons.component.css'
})
export class ControlButtonsComponent {
  @Input() isRunning = false;
  @Output() actionClick = new EventEmitter<ActionType>();

  handleClick(action: ActionType) {
    this.actionClick.emit(action);
  }
}
