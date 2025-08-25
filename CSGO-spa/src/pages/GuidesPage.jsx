import React from 'react'

export default function GuidesPage() {
  return (
    <section className="guides">
      <h1 className="page-title">Guides</h1>
      <section className="guide-block">
        <h2 className="guide-title">Aim Fundamentals</h2>
        <p className="guide-text">Focus on crosshair placement and recoil control. Train consistency through daily drills.</p>
      </section>
      <section className="guide-block">
        <h2 className="guide-title">Utility Usage</h2>
        <p className="guide-text">Learn lineups for smokes, flashes, and molotovs. Practice timing and spacing.</p>
      </section>
      <section className="guide-block">
        <h2 className="guide-title">Economy Decisions</h2>
        <p className="guide-text">Manage buys, force rounds, and eco plays to maximize round win probability.</p>
      </section>
    </section>
  )
}