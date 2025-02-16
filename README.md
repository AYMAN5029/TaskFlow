# TaskFlow - Modern Todo Application

TaskFlow is a feature-rich and elegant to-do list application designed to enhance productivity while maintaining a clean and intuitive interface. Built with modern technologies, TaskFlow ensures a seamless user experience with powerful task management capabilities.

## Demo
https://taskflow-app-deploy.netlify.app/

## Features

### Core Features:
- Task categorization (Work, Personal, Errands, etc.)
- Priority levels (Low, Medium, High, Urgent)
- Due dates and reminders (email & push notifications)
- Recurring tasks and habit tracking
- Multiple views (Kanban board, List view, Calendar)
- Subtasks, dependencies, and progress tracking
- **Built-in Pomodoro timer** with a smooth animation showing time running out
- **Motivational Quote Generator** at the top to keep users inspired
- Task deletion functionality

### User Experience & Design:
- Dark & light mode for visual comfort
- Smooth animations and intuitive interactions
- Drag-and-drop task management
- Dashboard with productivity insights
- Customizable themes for personalization

## Tech Stack
- **React (TypeScript)** – Modern UI development
- **Zustand** – Lightweight state management
- **Tailwind CSS** – For beautiful, responsive styling

## Project Structure
```
TaskFlow/
├── package.json
├── tailwind.config.js
├── src/
│   ├── types.ts
│   ├── store/useStore.ts
│   ├── components/
│   │   ├── TaskCard.tsx
│   │   ├── Header.tsx
│   ├── lib/utils.ts
│   ├── App.tsx
```

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/AYMAN5029/TaskFlow.git
   cd TaskFlow
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Run the development server:
   ```sh
   npm run dev
   ```

## Screenshots
Below are some screenshots of TaskFlow in action:

<img src="https://i.imgur.com/01UvCL4.png" alt="TaskFlow Dashboard" width="700" />
<img src="https://i.imgur.com/8sVBUFx.png" alt="Add Task" width="700" />
<img src="https://i.imgur.com/PBC1IvO.png" alt="Task Done" width="700" />
<img src="https://i.imgur.com/GrJdOqr.png" alt="Kanban" width="700" />
<img src="https://i.imgur.com/OJDyrR6.png" alt="Calender" width="700" />
<img src="https://i.imgur.com/ezFxFmH.png" alt="Dark Mode" width="700" />
<img src="https://i.imgur.com/bB2eKMv.png" alt="Pomodoro Timer" width="700" />

## Contribution
Contributions are welcome! Feel free to submit issues or pull requests to improve TaskFlow.

## License
This project is open-source and available under the MIT License.
