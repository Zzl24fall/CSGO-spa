import React, { useState } from 'react'
import Nav from './Nav.jsx'
import ThemeToggle from './ThemeToggle.jsx'
import logo from '../assets/images/logos/csgo-logotype.png'

export default function Header({ currentPage, onNavigate, theme, onToggleTheme, username, onOpenProfile }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(v => !v)
  const handleNavigate = (page) => {
    onNavigate(page)
    setMenuOpen(false)
  }
  return (
    <header className="site-header" role="banner">
      <div className="brand">
        <img className="brand-logo" src={logo} alt="CS:GO Fan Hub Logo" />
        <a href="#home" onClick={(e)=>{e.preventDefault();handleNavigate('home')}} className="brand-name">CS:GO Fan Hub</a>
      </div>
      <div className="header-controls">
        <div className="user-greet">Hello, {username}</div>
        <button className="profile-edit-btn" onClick={onOpenProfile} aria-label="Edit profile">Edit Profile</button>
        <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen ? 'true' : 'false'} onClick={toggleMenu}>
          <span aria-hidden="true">☰</span>
        </button>
      </div>
      <Nav currentPage={currentPage} onNavigate={handleNavigate} menuOpen={menuOpen} />
    </header>
  )
}