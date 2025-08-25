import React from 'react'
import Accordion from '../components/Accordion.jsx'
import hero from '../assets/images/hero.jpg'

export default function HomePage() {
  const items = [
    { title: 'Game Modes', content: 'Competitive, Casual, Deathmatch, Wingman, and more.' },
    { title: 'Beginner Tips', content: 'Crosshair discipline, recoil control, economy, and map awareness.' },
    { title: 'Team Play', content: 'Callouts, utility usage, trading, and post-plant setups.' }
  ]
  return (
    <section className="home">
      <div className="hero">
        <img className="hero-image" src={hero} alt="CS:GO themed hero" />
        <div className="hero-text">
          <h1 className="home-title">Welcome to CS:GO Fan Hub</h1>
          <p className="home-sub">Guides, weapons, and strategies in one place.</p>
        </div>
      </div>
      <div className="home-panels">
        <div className="panel">
          <h2 className="panel-title">Latest Highlights</h2>
          <p className="panel-text">Explore meta shifts, map callouts, and utility lineups.</p>
        </div>
        <div className="panel">
          <h2 className="panel-title">Community Focus</h2>
          <p className="panel-text">Learn from pro rounds and improve consistency.</p>
        </div>
        <div className="panel">
          <h2 className="panel-title">Practice Ideas</h2>
          <p className="panel-text">Aim routines, movement drills, and demo reviews.</p>
        </div>
      </div>
      <Accordion items={items} />
    </section>
  )
}