import React, { useState, useEffect, useCallback } from 'react';
import { Timer, Play, Pause, RotateCcw, Coffee, Brain } from 'lucide-react';
import { cn } from '../lib/utils';

type TimerMode = 'work' | 'break';

export const PomodoroTimer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState<TimerMode>('work');
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [progress, setProgress] = useState(100);

  const totalTime = mode === 'work' ? 25 * 60 : 5 * 60;

  const toggleTimer = useCallback(() => {
    setIsRunning(prev => !prev);
  }, []);

  const resetTimer = useCallback(() => {
    setIsRunning(false);
    setMode('work');
    setTimeLeft(25 * 60);
    setProgress(100);
  }, []);

  const switchMode = useCallback(() => {
    setIsRunning(false);
    if (mode === 'work') {
      setMode('break');
      setTimeLeft(5 * 60);
    } else {
      setMode('work');
      setTimeLeft(25 * 60);
    }
    setProgress(100);
  }, [mode]);

  useEffect(() => {
    let interval: number;
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prev => {
          const newTime = prev - 1;
          setProgress((newTime / totalTime) * 100);
          return newTime;
        });
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      // Play notification sound
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2869/2869-preview.mp3');
      audio.play();
      switchMode();
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, totalTime, switchMode]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <Timer className="w-6 h-6" />
        </button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-4 w-72 transform transition-all duration-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              {mode === 'work' ? <Brain className="w-5 h-5" /> : <Coffee className="w-5 h-5" />}
              {mode === 'work' ? 'Work Time' : 'Break Time'}
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <Timer className="w-5 h-5" />
            </button>
          </div>

          <div className="relative mb-4">
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={cn(
                  "h-full transition-all duration-1000",
                  mode === 'work' 
                    ? "bg-indigo-600 dark:bg-indigo-500"
                    : "bg-green-500 dark:bg-green-400",
                )}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-center mb-4">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={toggleTimer}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                isRunning
                  ? "bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900/50 dark:text-red-400"
                  : "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-400"
              )}
            >
              {isRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
            <button
              onClick={resetTimer}
              className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-400 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
            <button
              onClick={switchMode}
              className={cn(
                "p-2 rounded-full transition-all duration-300",
                mode === 'work'
                  ? "bg-green-100 text-green-600 hover:bg-green-200 dark:bg-green-900/50 dark:text-green-400"
                  : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200 dark:bg-indigo-900/50 dark:text-indigo-400"
              )}
            >
              {mode === 'work' ? <Coffee className="w-5 h-5" /> : <Brain className="w-5 h-5" />}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};