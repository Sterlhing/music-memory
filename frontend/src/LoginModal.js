import React, { useRef, useState } from 'react'
import { OverlayPanel } from 'primereact/overlaypanel'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default function LoginModal(props) {
  const op = useRef(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Button onClick={(e) => op.current.toggle(e)}>login</Button>
      <OverlayPanel
        className='login-modal'
        ref={op}
        toggle={e => props.isLoginModalOpen}
        closeOnEscape
        showCloseIcon>

          <p>login:</p>
          <span className="p-float-label">
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username">username</label>
            <InputText id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password">password</label>
            {/* xxx: write click handler for onClick event (store login data in 'smart component' (parent: App.js)) */}
            <Button severity="help" onClick={e => props.handleSubmit({username, password}) }></Button>
          </span>
      </OverlayPanel>

    </>
  )
}
