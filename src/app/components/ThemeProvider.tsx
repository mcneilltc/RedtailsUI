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
                main: darkMode ? '#e05e5f' : '#9e2a2b', // Accessible maroon variants
            },
            secondary: {
                main: darkMode ? '#66bb6a' : '#006837', // Accessible green variants
            },
            background: {
                default: darkMode ? '#1a1412' : '#fdfaf6', // Dark/Light warm background
                paper: darkMode ? '#2d241f' : '#f3e8d6', 
            },
            text: {
                primary: darkMode ? '#fdfaf6' : '#800000', // Accessible text primary (original maroon)
                secondary: darkMode ? '#d4c5b9' : '#800000', // Accessible text secondary (original maroon)
            },
        },
        typography: {
            "fontFamily": `var(--font-alkatra), "system-ui", "sans-serif"`,
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
