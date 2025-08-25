import React from 'react'

export default function Nav({ currentPage, onNavigate, menuOpen }) {
  const link = (id, text) => (
    <a
      href={`#${id}`}
      onClick={(e)=>{e.preventDefault();onNavigate(id)}}
      aria-current={currentPage === id ? 'page' : undefined}
    >{text}</a>
  )
  return (
    <nav className="main-nav" aria-label="Primary">
      <ul className="nav-list nav-desktop">
        <li>{link('home','Home')}</li>
        <li>{link('weapons','Weapons')}</li>
        <li>{link('guides','Guides')}</li>
        <li>{link('contact','Contact')}</li>
      </ul>
      {menuOpen && (
        <ul className="nav-list nav-mobile">
          <li>{link('home','Home')}</li>
          <li>{link('weapons','Weapons')}</li>
          <li>{link('guides','Guides')}</li>
          <li>{link('contact','Contact')}</li>
        </ul>
      )}
    </nav>
  )
}