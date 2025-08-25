import React, { useMemo, useState } from 'react'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [source, setSource] = useState('')
  const [other, setOther] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const [errors, setErrors] = useState({})

  const emailRegex = useMemo(() => /^\S+@\S+\.\S+$/, [])

  const validate = () => {
    const e = {}
    if (!name.trim()) e.name = 'Name is required.'
    if (!email.trim()) e.email = 'Email is required.'
    else if (!emailRegex.test(email.trim())) e.email = 'Please enter a valid email address.'
    if (!message.trim()) e.message = 'Message is required.'
    if (source === 'Other' && !other.trim()) e.other = 'Please specify.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setName('')
    setEmail('')
    setMessage('')
    setSource('')
    setOther('')
  }

  if (submitted) {
    return (
      <section className="contact">
        <h1 className="page-title">Contact</h1>
        <p role="status">Thank you for your message.</p>
      </section>
    )
  }

  return (
    <section className="contact">
      <h1 className="page-title">Contact</h1>
      <form className="contact-form" onSubmit={onSubmit} noValidate>
        <div className="form-row">
          <label htmlFor="nameInput">Name <span aria-hidden="true" className="required-star">*</span></label>
          <input id="nameInput" type="text" value={name} onChange={(e)=>setName(e.target.value)} aria-describedby={errors.name ? 'nameError' : undefined} required />
          {errors.name && <p id="nameError" className="error-msg" role="alert">{errors.name}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="emailInput">Email <span aria-hidden="true" className="required-star">*</span></label>
          <input id="emailInput" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} aria-describedby={errors.email ? 'emailError' : undefined} required />
          {errors.email && <p id="emailError" className="error-msg" role="alert">{errors.email}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="messageInput">Message <span aria-hidden="true" className="required-star">*</span></label>
          <textarea id="messageInput" value={message} onChange={(e)=>setMessage(e.target.value)} rows="5" aria-describedby={errors.message ? 'messageError' : undefined} required />
          {errors.message && <p id="messageError" className="error-msg" role="alert">{errors.message}</p>}
        </div>
        <div className="form-row">
          <label htmlFor="sourceSelect">How did you hear about us?</label>
          <select id="sourceSelect" value={source} onChange={(e)=>setSource(e.target.value)}>
            <option value="">Select</option>
            <option>Search</option>
            <option>Friend</option>
            <option>Other</option>
          </select>
        </div>
        {source === 'Other' && (
          <div className="form-row">
            <label htmlFor="otherInput">Please specify</label>
            <input id="otherInput" type="text" value={other} onChange={(e)=>setOther(e.target.value)} aria-describedby={errors.other ? 'otherError' : undefined} />
            {errors.other && <p id="otherError" className="error-msg" role="alert">{errors.other}</p>}
          </div>
        )}
        <div className="form-actions">
          <button type="submit">Send</button>
        </div>
      </form>
    </section>
  )
}