export enum TimerType {
  FOCUS = 'Focus Time',
  SHORT_BREAK = 'Short Break',
  LONG_BREAK = 'Long Break'
}

export enum TimerState {
  IDLE = 'idle',
  RUNNING = 'running',
  PAUSED = 'paused',
  COMPLETED = 'completed'
}

export type ActionType = 'start' | 'pause' | 'skip';

export interface Timer {
  type: TimerType;
  duration: number;
  currentTime: number;
  state: TimerState;
  sessions: number;
  color: string;
  totalSessions: number;
}

export interface TimerAction {
  type: 'start' | 'pause' | 'reset' | 'skip';
  timerId: TimerType;
}
