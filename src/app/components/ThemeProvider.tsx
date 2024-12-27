'use client';

import React, { createContext, useContext, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const ThemeContext = createContext<{
    toggleTheme: () => void;
    darkMode: boolean;
}>({
    toggleTheme: () => {},
    darkMode: false
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#800000' : '#b03030', // Maroon
            },
            secondary: {
                main: darkMode ? '#004d26' : '#007d4a', // Dark green
            },
            background: {
                default: darkMode ? '#1f2937' : '#f3f4f6', // Background color
                paper: darkMode ? '#111827' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#111827',
                secondary: darkMode ? '#9ca3af' : '#4b5563', // Tan for light theme
            },
        },
        typography: {
            "fontFamily": `"Alkatra", "system-ui", "sans-serif"`,
        }
    });

    const toggleTheme = () => {
        setDarkMode((prevMode) => !prevMode);
    };

    return (
        <ThemeContext.Provider value={{ toggleTheme, darkMode }}>
            <MUIThemeProvider theme={theme}>
            <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}
