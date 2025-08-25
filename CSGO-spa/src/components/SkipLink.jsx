import React from 'react'

export default function SkipLink({ targetId }) {
  return (
    <a href={`#${targetId}`} className="skip-link">Skip to main content</a>
  )
}