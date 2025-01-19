# Pomodoro Timer Angular Application

A modern, customizable Pomodoro Timer built with Angular 17 using standalone components and Material Design.

![Pomodoro Timer Screenshot]
[]

## 🌟 Features

- **Three Timer Types**
  - Focus Time (25 minutes)
  - Short Break (5 minutes)
  - Long Break (15 minutes)

- **Visual Features**
  - Circular progress indicator
  - Session progress dots
  - Intuitive control buttons
  - Material Design UI
  - Responsive layout

- **Core Functionality**
  - Automatic timer transitions
  - Customizable durations
  - Session tracking
  - Visual and tooltip feedback
  - State management using RxJS

## 🛠️ Technical Stack

- Angular 17 (Standalone Components)
- Angular Material
- RxJS
- TypeScript

## 🏗️ Architecture

### Component Structure

```
src/
  ├── app/
  │   ├── components/
  │   │   ├── timer-container/
  │   │   ├── timer-card/
  │   │   └── settings-dialog/
  │   ├── shared/
  │   │   ├── circular-timer/
  │   │   ├── control-buttons/
  │   │   ├── progress-dots/
  │   │   └── material.module.ts
  │   ├── services/
  │   │   ├── timer.service.ts
  │   │   └── settings.service.ts
  │   └── types/
  │       └── timer.types.ts
```

### Key Components

1. **TimerContainerComponent**
  - Main container handling layout
  - Manages multiple timer instances
  - Responsive grid system

2. **TimerCardComponent**
  - Individual timer display
  - State management
  - User interactions

3. **CircularTimerComponent**
  - Visual countdown display
  - Progress indication
  - Material progress spinner integration

### Services

1. **TimerService**
  - Core timer logic
  - State management using BehaviorSubject
  - Timer transitions
  - Session tracking

2. **SettingsService**
  - Timer duration management
  - Settings persistence
  - Configuration updates

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository

```bash
git clone [repository-url]
cd pomodoro-timer
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
ng serve
```

4. Navigate to `http://localhost:4200/`

## 💡 Usage

1. **Starting a Timer**
  - Click the play button to start
  - Timer automatically transitions to breaks
  - Progress dots show completed sessions

2. **Customizing Durations**
  - Click the settings icon
  - Adjust durations for each timer type
  - Save changes to update immediately

3. **Timer Controls**
  - Play/Pause: Start or pause current timer
  - Skip: Move to next timer
  - Reset: Return timer to initial state

## 🎨 Customization

### Timer Durations

Modify default durations in the settings:

- Focus Time: 1-60 minutes
- Short Break: 1-30 minutes
- Long Break: 1-45 minutes

### Themes

The application uses Material Design themes with custom colors:

- Focus Timer: #E57373 (Red)
- Short Break: #4DB6AC (Teal)
- Long Break: #5C6BC0 (Blue)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Design Decisions

1. **Standalone Components**
  - Better tree-shaking
  - Simplified dependency management
  - Improved lazy loading

2. **RxJS for State Management**
  - Reactive state updates
  - Simplified data flow
  - Better state synchronization

3. **Material Design**
  - Consistent UI/UX
  - Built-in accessibility
  - Responsive components

[//]: # (## 📚 Future Enhancements)

[//]: # ()

[//]: # (- [ ] Sound notifications)

[//]: # (- [ ] Task tracking)

[//]: # (- [ ] Statistics dashboard)

[//]: # (- [ ] Dark/Light theme toggle)

[//]: # (- [ ] Custom color themes)

[//]: # (- [ ] Session history)

[//]: # (- [ ] Export statistics)
