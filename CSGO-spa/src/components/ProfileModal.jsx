import React, { forwardRef, useState, useEffect } from 'react'

const ProfileModal = forwardRef(function ProfileModal({ username, onSave }, ref) {
  const [tempName, setTempName] = useState(username)
  useEffect(() => { setTempName(username) }, [username])
  const onSubmit = (e) => {
    e.preventDefault()
    const value = String(tempName || '').trim()
    if (value.length < 2) return
    onSave(value)
    if (ref && ref.current && ref.current.close) ref.current.close()
  }
  return (
    <dialog ref={ref} className="profile-dialog" aria-labelledby="profileDialogTitle">
      <form method="dialog" onSubmit={onSubmit} className="dialog-form">
        <h2 id="profileDialogTitle" className="dialog-title">Edit Profile</h2>
        <label htmlFor="usernameInput">Username</label>
        <input id="usernameInput" type="text" value={tempName} onChange={(e)=>setTempName(e.target.value)} aria-describedby="usernameHelp" />
        <p id="usernameHelp" className="dialog-help">At least 2 characters</p>
        <div className="dialog-actions">
          <button value="cancel" type="button" onClick={()=> ref.current && ref.current.close()}>Cancel</button>
          <button type="submit" value="default">Save</button>
        </div>
      </form>
    </dialog>
  )
})

export default ProfileModal