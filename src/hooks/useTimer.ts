import { useEffect, useRef } from 'react';
import { useTimerStore, formatTime } from '../stores';

/**
 * Custom hook for timer functionality
 * Provides timer state and controls with automatic ticking
 */
export function useTimer(autoStart: boolean = false) {
  const {
    timeElapsed,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    tick,
    setTimeElapsed,
  } = useTimerStore();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-start timer if requested
  useEffect(() => {
    if (autoStart && !isRunning) {
      startTimer();
    }
  }, [autoStart, isRunning, startTimer]);

  // Set up automatic ticking when running
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        tick();
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, tick]);

  // Format time for display
  const formattedTime = formatTime(timeElapsed);

  // Get time components
  const timeComponents = {
    hours: Math.floor(timeElapsed / 3600),
    minutes: Math.floor((timeElapsed % 3600) / 60),
    seconds: timeElapsed % 60,
  };

  // Control functions
  const start = () => startTimer();
  const pause = () => pauseTimer();
  const reset = () => resetTimer();
  const setTime = (seconds: number) => setTimeElapsed(Math.max(0, seconds));

  // Utility functions
  const addMinute = () => setTime(timeElapsed + 60);
  const subtractMinute = () => setTime(Math.max(0, timeElapsed - 60));

  // Status checks
  const isActive = isRunning;
  const isPaused = !isRunning && timeElapsed > 0;
  const isReset = timeElapsed === 0 && !isRunning;

  return {
    // State
    timeElapsed,
    isRunning,
    formattedTime,
    timeComponents,

    // Status
    isActive,
    isPaused,
    isReset,

    // Controls
    start,
    pause,
    reset,
    setTime,
    addMinute,
    subtractMinute,

    // Utilities
    formatTime: (seconds?: number) => formatTime(seconds ?? timeElapsed),
  };
}
