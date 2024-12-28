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
                main: darkMode ? '#b03030' : '#ffffff', // Maroon /white
            },
            secondary: {
                main: darkMode ? '#3380ff' : '#a2c5ff', // Dark blue / green was too military
            },
            background: {
                default: darkMode ? '#d2b48c' : '#8b5e3c', // Background color
                paper: darkMode ? '#c2a47c' : '#3380ff',
            },
            text: {
                primary: darkMode ? '#800000' : '#ffffff',
                secondary: darkMode ? '#800000' : '#ffffff', // Tan for light theme
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
