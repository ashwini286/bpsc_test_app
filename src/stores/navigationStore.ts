import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

// Navigation Store Types
export type ViewType = 'chapters' | 'subtopics' | 'test';

export interface NavigationState {
  currentView: ViewType;
  navigationHistory: ViewType[];

  // Actions
  navigateTo: (view: ViewType) => void;
  goBack: () => void;
  canGoBack: () => boolean;
  resetNavigation: () => void;
}

const initialState = {
  currentView: 'chapters' as ViewType,
  navigationHistory: ['chapters' as ViewType],
};

export const useNavigationStore = create<NavigationState>()(
  devtools(
    (set, get) => ({
      ...initialState,

      navigateTo: (view) =>
        set(
          (state) => ({
            currentView: view,
            navigationHistory: [...state.navigationHistory, view],
          }),
          false,
          'navigateTo'
        ),

      goBack: () =>
        set(
          (state) => {
            if (state.navigationHistory.length <= 1) return state;

            const newHistory = [...state.navigationHistory];
            newHistory.pop(); // Remove current view
            const previousView = newHistory[newHistory.length - 1];

            return {
              currentView: previousView,
              navigationHistory: newHistory,
            };
          },
          false,
          'goBack'
        ),

      canGoBack: () => {
        const state = get();
        return state.navigationHistory.length > 1;
      },

      resetNavigation: () =>
        set(
          { ...initialState },
          false,
          'resetNavigation'
        ),
    }),
    {
      name: 'navigation-store',
    }
  )
);
