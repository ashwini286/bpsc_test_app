import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Timer Store Types
export interface TimerState {
  timeElapsed: number;
  isRunning: boolean;
  startTime: number | null;

  // Actions
  startTimer: () => void;
  pauseTimer: () => void;
  resetTimer: () => void;
  tick: () => void;
  setTimeElapsed: (time: number) => void;
}

// Helper function to format time
export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  if (hours > 0) {
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const useTimerStore = create<TimerState>()(
  devtools(
    (set, get) => ({
      timeElapsed: 0,
      isRunning: false,
      startTime: null,

      startTimer: () =>
        set(
          (state) => ({
            isRunning: true,
            startTime: state.startTime || Date.now() - (state.timeElapsed * 1000),
          }),
          false,
          'startTimer'
        ),

      pauseTimer: () =>
        set(
          (state) => {
            const now = Date.now();
            const elapsedSinceStart = state.startTime ? Math.floor((now - state.startTime) / 1000) : 0;
            return {
              isRunning: false,
              timeElapsed: elapsedSinceStart,
            };
          },
          false,
          'pauseTimer'
        ),

      resetTimer: () =>
        set(
          {
            timeElapsed: 0,
            isRunning: false,
            startTime: null,
          },
          false,
          'resetTimer'
        ),

      tick: () =>
        set(
          (state) => {
            if (!state.isRunning || !state.startTime) return state;
            const now = Date.now();
            const elapsed = Math.floor((now - state.startTime) / 1000);
            return { timeElapsed: elapsed };
          },
          false,
          'tick'
        ),

      setTimeElapsed: (time) =>
        set(
          { timeElapsed: time },
          false,
          'setTimeElapsed'
        ),
    }),
    {
      name: 'timer-store',
    }
  )
);
