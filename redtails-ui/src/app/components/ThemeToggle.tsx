'use client';

import { useTheme } from './ThemeProvider';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none bg-gray-200 dark:bg-gray-700"
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <span className="sr-only">Toggle theme</span>
      <div
        className={`${
          theme === 'dark' ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform rounded-full transition-transform bg-white`}
      >
        {theme === 'dark' ? (
          <FaMoon className="h-4 w-4 text-gray-700" />
        ) : (
          <FaSun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}