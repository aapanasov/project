import { createContext } from 'react';

export const enum Theme {
  LIGHT = 'app-light-theme',
  DARK = 'app-dark-theme',
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
