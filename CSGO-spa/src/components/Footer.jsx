import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <p className="footer-text">© 2025 CS:GO Fan Hub</p>
      <ul className="footer-links" aria-label="Social links">
        <li><a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">Twitter</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a></li>
        <li><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a></li>
      </ul>
    </footer>
  )
}