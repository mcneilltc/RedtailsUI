'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';


const ThemeContext = createContext({
    toggleTheme: () => {},
    darkMode: false,
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Read the theme preference from local storage
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setDarkMode(savedTheme === 'dark');
        }
    }, []);

    useEffect(() => {
        // Save the theme preference to local storage
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: darkMode ? '#ffffff' : '#b03030', // Maroon /white '#b03030' : '#ffffff'
            },
            secondary: {
                main: darkMode ? '#a2c5ff' : '#3380ff', // Dark blue / green was too military #3380ff' : '#a2c5ff'
            },
            background: {
                default: darkMode ? '#8b5e3c' : '#d2b48c', // Background color '#d2b48c' : '#8b5e3c'
                paper: darkMode ? '#3380ff' : '#c2a47c', // '#c2a47c' : '#3380ff'
            },
            text: {
                primary: darkMode ? '#ffffff' : '#800000',
                secondary: darkMode ? '#ffffff' : '#800000', // Tan for light theme '#800000' : '#ffffff'
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
            <EmotionThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </EmotionThemeProvider>
            </MUIThemeProvider>
        </ThemeContext.Provider>
    );
}
