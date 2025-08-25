import React, { useEffect, useMemo, useRef, useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import SkipLink from './components/SkipLink.jsx'
import ProfileModal from './components/ProfileModal.jsx'
import HomePage from './pages/HomePage.jsx'
import WeaponsPage from './pages/WeaponsPage.jsx'
import GuidesPage from './pages/GuidesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'

const PAGES = ['home','weapons','guides','contact']

export default function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [theme, setTheme] = useState('light')
  const [username, setUsername] = useState('Player1')
  const mainRef = useRef(null)
  const dialogRef = useRef(null)

  useEffect(() => {
    const initial = window.location.hash.replace('#','')
    if (PAGES.includes(initial)) setCurrentPage(initial)
  }, [])

  useEffect(() => {
    function onHashChange() {
      const hash = window.location.hash.replace('#','')
      if (PAGES.includes(hash)) setCurrentPage(hash)
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const title = currentPage.charAt(0).toUpperCase() + currentPage.slice(1) + ' – CS:GO Fan Hub'
    document.title = title
    if (mainRef.current) mainRef.current.focus()
  }, [currentPage])

  useEffect(() => {
    document.body.classList.toggle('dark', theme === 'dark')
  }, [theme])

  const navigate = useMemo(() => (page) => {
    if (!PAGES.includes(page)) return
    if (window.location.hash !== '#' + page) window.location.hash = '#' + page
    setCurrentPage(page)
  }, [])

  const openProfile = () => {
    if (dialogRef.current && dialogRef.current.showModal) dialogRef.current.showModal()
  }

  const onSaveUsername = (name) => {
    setUsername(name)
  }

  return (
    <div className="app">
      <SkipLink targetId="mainContent" />
      <Header
        currentPage={currentPage}
        onNavigate={navigate}
        theme={theme}
        onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        username={username}
        onOpenProfile={openProfile}
      />
      <main id="mainContent" ref={mainRef} tabIndex="-1" className="main-content" aria-live="polite">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'weapons' && <WeaponsPage />}
        {currentPage === 'guides' && <GuidesPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
      <ProfileModal ref={dialogRef} username={username} onSave={onSaveUsername} />
    </div>
  )
}