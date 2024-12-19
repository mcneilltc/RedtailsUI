'use client';
import Link from 'next/link'
import { useCart } from '../../../context/CartContext'
// import { FaShoppingCart } from 'react-icons/fa'
// import ThemeToggle from '../ThemeToggle';
import './styles.css';
import logo from '../../../../public/images/logos/logo2.png'
import { AppBar, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { useTheme } from '../ThemeProvider'
import { Brightness4, Brightness7 } from '@mui/icons-material';

export default function Navigation() {
    const { cartItems } = useCart();
    const { toggleTheme, darkMode } = useTheme();  

  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <div className="logo">
          <img src={logo.src} alt="Red Tails Outdoors Logo" />
        </div>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Red Tails Outdoors
        </Typography>
        <Button color="inherit" href="/">
          Home
        </Button>
        <Button color="inherit" href="/about">
          About Us
        </Button>
        <Button variant="contained" color="primary" href="/book">
          Make a Reservation
        </Button>
        <IconButton color="inherit" onClick={toggleTheme} aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
          {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
