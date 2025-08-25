import React from 'react'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-pressed={theme === 'dark'} aria-label="Toggle dark mode">
      {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}