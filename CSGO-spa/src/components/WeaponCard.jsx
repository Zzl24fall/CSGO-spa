import React from 'react'

export default function WeaponCard({ image, name, category, description }) {
  return (
    <article className="weapon-card">
      <img className="weapon-image" src={image} alt={name} />
      <div className="weapon-body">
        <h3 className="weapon-title">{name}</h3>
        <p className="weapon-meta">Category: {category}</p>
        <p className="weapon-desc">{description}</p>
      </div>
    </article>
  )
}