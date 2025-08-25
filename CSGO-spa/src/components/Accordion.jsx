import React, { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section className="accordion">
      {items.map((it, idx) => {
        const expanded = openIndex === idx
        const btnId = `acc-h-${idx}`
        const panelId = `acc-p-${idx}`
        return (
          <div className="accordion-item" key={idx}>
            <h2 className="accordion-header">
              <button
                id={btnId}
                className="accordion-trigger"
                aria-expanded={expanded ? 'true' : 'false'}
                aria-controls={panelId}
                onClick={() => setOpenIndex(expanded ? -1 : idx)}
              >
                {it.title}
              </button>
            </h2>
            <div
              id={panelId}
              className="accordion-panel"
              role="region"
              aria-labelledby={btnId}
              hidden={!expanded}
            >
              <p>{it.content}</p>
            </div>
          </div>
        )
      })}
    </section>
  )
}