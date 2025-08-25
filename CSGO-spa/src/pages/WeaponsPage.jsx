import React, { useMemo, useState } from 'react'
import WeaponCard from '../components/WeaponCard.jsx'
import data from '../assets/data/weapons.json'
import ak47 from '../assets/images/weapons/ak47.jpg'
import awp from '../assets/images/weapons/awp.jpg'
import m4a1 from '../assets/images/weapons/m4a1.jpg'
import deagle from '../assets/images/weapons/desert-eagle.jpg'
import p90 from '../assets/images/weapons/p90.jpg'
import glock from '../assets/images/weapons/glock18.jpg'

const imgMap = {
  ak47,
  awp,
  m4a1,
  deagle,
  p90,
  glock
}

export default function WeaponsPage() {
  const [type, setType] = useState('All')
  const [sort, setSort] = useState('name')

  const items = useMemo(() => {
    let arr = data.slice()
    if (type !== 'All') arr = arr.filter(w => w.category === type)
    if (sort === 'name') arr.sort((a,b)=>a.name.localeCompare(b.name))
    if (sort === 'damage') arr.sort((a,b)=>b.damage - a.damage)
    return arr
  }, [type, sort])

  return (
    <section className="weapons">
      <h1 className="page-title">Weapons</h1>
      <form className="filters" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="typeSelect">Filter by category</label>
        <select id="typeSelect" value={type} onChange={(e)=>setType(e.target.value)}>
          <option>All</option>
          <option value="Rifle">Rifle</option>
          <option value="Pistol">Pistol</option>
          <option value="SMG">SMG</option>
          <option value="Sniper">Sniper</option>
        </select>
        <label htmlFor="sortSelect">Sort by</label>
        <select id="sortSelect" value={sort} onChange={(e)=>setSort(e.target.value)}>
          <option value="name">Name</option>
          <option value="damage">Damage</option>
        </select>
      </form>
      <div className="weapon-grid">
        {items.map(w => (
          <WeaponCard key={w.id} image={imgMap[w.imageKey]} name={w.name} category={w.category} description={w.description} />
        ))}
      </div>
    </section>
  )
}